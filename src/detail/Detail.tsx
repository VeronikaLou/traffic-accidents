import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MainCause } from "./MainCause";
import { Alcohol } from "./Alcohol";
import { Days } from "./Days";
import { Years } from "./Years";
import { AllRecords } from "./AllRecords";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

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

interface DetailInfo {
  name: string;
  mainCause: { [key: string]: number };
  alcohol: { [key: string]: number };
  day: { [key: string]: number };
  year: { [key: string]: number };
  month: { [key: string]: number };
}

type LocalAccidents = [{ [key: string]: number }];

export const Detail = ({ index }: { index: number }) => {
  const [data, setData] = useState<DetailInfo>({
    name: "",
    mainCause: {},
    alcohol: {},
    day: {},
    year: {},
    month: {},
  });

  const [localAccidents, setLocalAccidents] = useState<LocalAccidents>([{}]);
  const [showLoader, setShowLoader] = React.useState(true);

  useEffect(() => {
    setShowLoader(true);
    fetch(`/detailinfo?index=${index}`)
      .then((response) => response.json())
      .then((data) => setData(data));

    fetch(`/localaccidents?index=${index}`)
      .then((response) => response.json())
      .then((data) => setLocalAccidents(data))
      .then((a) => setShowLoader(false));
  }, [index]);

  const classes = useStyles();

  return showLoader ? (
    <CircularProgress
      style={{ height: 100, width: 100, marginTop: "10%", marginLeft: "45%" }}
    />
  ) : (
    <div className={classes.root}>
      <Typography
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
        variant="h5"
      >
        {data.name}
      </Typography>
      <MainCause causes={data.mainCause} />
      <Alcohol alcohols={data.alcohol} />
      <Days days={data.day} />
      <Years years={data.year} />
      <AllRecords localAccidents={localAccidents} />
    </div>
  );
};
