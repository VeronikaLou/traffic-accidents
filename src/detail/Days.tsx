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
} from "@material-ui/core";
import { days } from "../Mocks";
import { useStyles } from "./Detail";

export const Days = () => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        className={classes.summary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontWeight: "bold" }} className={classes.heading}>
          Den v týdnu
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.detail}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {days.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};
