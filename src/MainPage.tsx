import React from "react";
import "./App.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton, TableSortLabel } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

interface CityPart {
  readonly name: string;
  readonly deathsCount: number;
  readonly mainCause: string;
  readonly accidentCount: number;
  readonly cause: string;
  readonly index: number;
}

interface HeadCell {
  id: string;
  label: string;
}

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: "asc" | "desc";
  orderBy: string;
}

const headCells: HeadCell[] = [
  {
    id: "name",
    label: "Městská část",
  },
  {
    id: "accidentCount",
    label: "Počet nehod",
  },
  {
    id: "deathsCount",
    label: "Počet úmrtí",
  },
  {
    id: "mainCause",
    label: "Nejčastější hlavní příčina",
  },
  {
    id: "cause",
    label: "Nejčastější příčina",
  },
  {
    id: "detail",
    label: "Zobrazit detail",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const classes = useStyles();
  return (
    <TableHead style={{ backgroundColor: "#6a6a6a6e" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            style={{ fontWeight: "bold" }}
            align="center"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

function descendingComparator(a: any, b: any, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: "asc" | "desc",
  orderBy: string
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const MainPage = ({
  visitDetail,
}: {
  visitDetail: (index: number) => void;
}) => {
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [data, setData] = React.useState<CityPart[]>([]);
  const [showLoader, setShowLoader] = React.useState(true);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    setShowLoader(true);
    fetch("https://trafficsafetyinbrno-busy-leopard-bh.eu-gb.mybluemix.net/rest/basicinfo")
      .then((response) => response.json())
      .then((data) => {
        const resultData = data.map((cityPart: any, idx: number) => ({
          ...cityPart,
          index: idx,
        }));
        setData(resultData);
      })
      .then((a) => setShowLoader(false));
  }, []);

  return showLoader ? (
    <CircularProgress
      style={{ height: 100, width: 100, marginTop: "10%", marginLeft: "45%" }}
    />
  ) : (
    <TableContainer style={{ marginTop: "10px" }} component={Paper}>
      <Table aria-label="simple table">
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {stableSort(data, getComparator(order, orderBy)).map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.accidentCount}</TableCell>
              <TableCell align="center">{row.deathsCount}</TableCell>
              <TableCell align="center">{row.mainCause}</TableCell>
              <TableCell align="center">{row.cause}</TableCell>
              <TableCell component="th" align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => visitDetail(row.index)}
                >
                  <TelegramIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
