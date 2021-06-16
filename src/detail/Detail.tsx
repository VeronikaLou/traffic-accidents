import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MainCause } from "./MainCause";
import { Alcohol } from "./Alcohol";
import { Days } from "./Days";
import { Years } from "./Years";
import { AllRecords } from "./AllRecords";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    backgroundColor: "#6a6a6a6e",
  },
  detail: {
    padding: 0,
  },
}));

export const Detail = ({ name }: { name: string }) => {
  useEffect(() => {
    //fetch
  }, [name]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainCause />
      <Alcohol />
      <Days />
      <Years />
      <AllRecords />
    </div>
  );
};
