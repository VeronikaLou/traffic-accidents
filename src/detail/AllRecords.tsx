import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TablePagination,
} from "@material-ui/core";
import { useStyles } from "./Detail";

export const AllRecords = ({
  localAccidents,
}: {
  localAccidents: [{ [key: string]: string | number }];
}) => {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Accordion>
      <AccordionSummary
        className={classes.summary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontWeight: "bold" }} className={classes.heading}>
          Všechny záznamy
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.detail}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: "#6a6a6a29" }}>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Rok
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Měsíc
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Alkohol
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Den
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Počet úmrtí
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Hlavní příčina
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Příčina
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {localAccidents
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell align="left">{row.year}</TableCell>
                    <TableCell align="center">{row.month}</TableCell>
                    <TableCell align="center">{row.alcohol}</TableCell>
                    <TableCell align="center">{row.day}</TableCell>
                    <TableCell align="center">{row.numberOfDeaths}</TableCell>
                    <TableCell align="center">{row.mainCause}</TableCell>
                    <TableCell align="center">{row.cause}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={localAccidents.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};
