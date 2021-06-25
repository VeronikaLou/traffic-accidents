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
import { useStyles } from "./Detail";

export const Days = ({ days }: { days: { [key: string]: number } }) => {
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
              {Object.keys(days).map((row) => (
                <TableRow key={row}>
                  <TableCell align="left">{row}</TableCell>
                  <TableCell align="right">{days[row]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};
