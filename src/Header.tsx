import { AppBar, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { lightBlue } from "@material-ui/core/colors";
import { MainPage } from "./MainPage";
import { Page } from "./constants/Page";

export const Header = ({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (tab: string) => void;
}) => (
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
        <Tab label="Přehled" value="main_page" href={Page.Main} />
        <Tab label="Detail" value="detail" disabled={tab === "main_page"} />
      </Tabs>
    </AppBar>
    {tab === "main_page" && <MainPage />}
  </>
);
