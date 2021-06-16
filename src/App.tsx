import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Page } from "./constants/Page";
import { Detail } from "./detail/Detail";
import { Header } from "./Header";
import { MainPage } from "./MainPage";

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path={Page.Stred}>
        <Detail name="stred" />
      </Route>
      <Route exact path={Page.Bohunice}>
        <Detail name="bohunice" />
      </Route>
      <Route exact path={Page.Bosonohy}>
        <Detail name="bosonohy" />
      </Route>
      <Route exact path={Page.Bystrc}>
        <Detail name="bystrc" />
      </Route>
      <Route exact path={Page.Cernovice}>
        <Detail name="cernovice" />
      </Route>
      <Route exact path={Page.Chrlice}>
        <Detail name="chrlice" />
      </Route>
      <Route exact path={Page.Ivanovice}>
        <Detail name="ivanovice" />
      </Route>
      <Route exact path={Page.Jehnice}>
        <Detail name="jehnice" />
      </Route>
      <Route exact path={Page.Jih}>
        <Detail name="jih" />
      </Route>
      <Route exact path={Page.Jundrov}>
        <Detail name="jundrov" />
      </Route>
      <Route exact path={Page.Kninicky}>
        <Detail name="kinicky" />
      </Route>
      <Route exact path={Page.Kohoutovice}>
        <Detail name="kohoutovice" />
      </Route>
      <Route exact path={Page.Komin}>
        <Detail name="komin" />
      </Route>
      <Route exact path={Page.KralovoPole}>
        <Detail name="kralovo-pole" />
      </Route>
      <Route exact path={Page.Lisen}>
        <Detail name="lisen" />
      </Route>
      <Route exact path={Page.MalomericeObrany}>
        <Detail name="malomerice" />
      </Route>
      <Route exact path={Page.Slatina}>
        <Detail name="slatina" />
      </Route>
      <Route exact path={Page.Main}>
        <MainPage />
      </Route>
      <Route path="*">
        <Redirect to={Page.Main} />
      </Route>
    </Switch>
  </Router>
);

