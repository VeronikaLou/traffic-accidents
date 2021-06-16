import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

export const Header = () => {
    const [value, setValue] = useState('main_page')

  return (
    <AppBar position="static" color="primary">
      <Tabs
        aria-label="tabs"
        indicatorColor="secondary"
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <Tab label="Přehled" value="main_page" />
        <Tab label="Detail" value="detail" disabled />
      </Tabs>
    </AppBar>
  );
};
