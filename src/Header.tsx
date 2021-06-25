import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { lightBlue } from "@material-ui/core/colors";
import { MainPage } from "./MainPage";
import { Detail } from "./detail/Detail";

export const Header = () => {
  const [tab, setTab] = useState("main_page");
  const [page, setPage] = useState(0);
  const visitDetail = (index: number) => {
    setTab("detail");
    setPage(index);
  };

  return (
    <>
      <AppBar
        style={{ backgroundColor: lightBlue.A700 }}
        position="static"
        color="primary"
      >
        <Tabs
          aria-label="tabs"
          indicatorColor="secondary"
          value={tab}
          onChange={(event, newValue) => setTab(newValue)}
        >
          <Tab label="Přehled" value="main_page" />
          <Tab label="Detail" value="detail" disabled={tab === "main_page"} />
        </Tabs>
      </AppBar>
      {tab === "main_page" && <MainPage visitDetail={visitDetail}/>}
      {tab === "detail" && <Detail index={page} />}
    </>
  );
};
