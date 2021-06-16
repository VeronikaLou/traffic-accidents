import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Page } from "./constants/Page";
import { Detail } from "./detail/Detail";
import { Header } from "./Header";

export const App = () => {
  const [tab, setTab] = useState("detail");

  const setDetailTab = (name: string) => {
    setTab("detail");

    return <Detail name="name" />;
  };

  return (
    <Router>
      <Header tab={tab} setTab={setTab} />
      <Switch>
        <Route exact path={Page.Stred}>
          {() => setDetailTab("stred")}
        </Route>
        <Route exact path={Page.Bohunice}>
          {() => setDetailTab("bohunice")}
        </Route>
        <Route exact path={Page.Bosonohy}>
          {() => setDetailTab("bosonohy")}
        </Route>
        <Route exact path={Page.Bystrc}>
          {() => setDetailTab("bystrc")}
        </Route>
        <Route exact path={Page.Cernovice}>
          {() => setDetailTab("cernovice")}
        </Route>
        <Route exact path={Page.Chrlice}>
          {() => setDetailTab("chrlice")}
        </Route>
        <Route exact path={Page.Ivanovice}>
          {() => setDetailTab("ivanovice")}
        </Route>
        <Route exact path={Page.Jehnice}>
          {() => setDetailTab("jehnice")}
        </Route>
        <Route exact path={Page.Jih}>
          {() => setDetailTab("jih")}
        </Route>
        <Route exact path={Page.Jundrov}>
          {() => setDetailTab("jundrov")}
        </Route>
        <Route exact path={Page.Kninicky}>
          {() => setDetailTab("kinicky")}
        </Route>
        <Route exact path={Page.Kohoutovice}>
          {() => setDetailTab("kohoutovice")}
        </Route>
        <Route exact path={Page.Komin}>
          {() => setDetailTab("komin")}
        </Route>
        <Route exact path={Page.KralovoPole}>
          {() => setDetailTab("kralovo-pole")}
        </Route>
        <Route exact path={Page.Lisen}>
          {() => setDetailTab("lisen")}
        </Route>
        <Route exact path={Page.MalomericeObrany}>
          {() => setDetailTab("malomerice")}
        </Route>
        <Route exact path={Page.Slatina}>
          {() => setDetailTab("slatina")}
        </Route>
        <Route exact path={Page.Zidenice}>
          {() => setDetailTab("zidenice")}
        </Route>
        <Route exact path={Page.Main}>
          {() => setTab("main_page")}
        </Route>
        <Route path="*">
          <Redirect to={Page.Main} />
        </Route>
      </Switch>
    </Router>
  );
};
