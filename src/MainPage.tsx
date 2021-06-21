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

interface CityPart {
  readonly name: string;
  readonly deathsCount: number;
  readonly mainCause: string;
  readonly accidentsCount: number;
}

const data: CityPart[] = [
  {
    name: "Brno-střed",
    deathsCount: 100,
    mainCause: "Nesprávný způsob jízdy",
    accidentsCount: 500,
  },
  {
    name: "Brno-Černovice",
    deathsCount: 5,
    mainCause: "Nedání přednosti v jízdě",
    accidentsCount: 150,
  },
  {
    name: "Brno-Slatina",
    deathsCount: 10000,
    mainCause: "Nedání přednosti v jízdě",
    accidentsCount: 5000000,
  },
  {
    name: "Brno-Židenice",
    deathsCount: 55,
    mainCause: "Nesprávný způsob jízdy",
    accidentsCount: 675,
  },
  {
    name: "Brno-Bystrc",
    deathsCount: 104564560,
    mainCause: "Nezaviněná řidičem",
    accidentsCount: 50055454,
  },
];

export const MainPage = ({
  visitDetail,
}: {
  visitDetail: (name: string) => void;
}) => (
  <TableContainer style={{ marginTop: "10px" }} component={Paper}>
    <Table aria-label="simple table">
      <TableHead style={{ backgroundColor: "#6a6a6a6e" }}>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }} align="center">
            <TableSortLabel>Městská část</TableSortLabel>
          </TableCell>
          <TableCell style={{ fontWeight: "bold" }} align="center">
            <TableSortLabel>Počet nehod</TableSortLabel>
          </TableCell>
          <TableCell style={{ fontWeight: "bold" }} align="center">
            Počet úmrtí
          </TableCell>
          <TableCell style={{ fontWeight: "bold" }} align="center">
            Nejčastější příčina
          </TableCell>
          <TableCell style={{ fontWeight: "bold" }} align="center">
            Zobrazit detail
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.name}>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.accidentsCount}</TableCell>
            <TableCell align="center">{row.deathsCount}</TableCell>
            <TableCell align="center">{row.mainCause}</TableCell>
            <TableCell component="th" align="center">
              <IconButton
                aria-label="delete"
                onClick={() => visitDetail(row.name)}
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
