import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Campaigns from "../pages/Campaigns";
import NotFound from "../pages/NotFound";
import { PAGES } from "./constants";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={[PAGES.campaigns, PAGES.home]} exact={true}>
        <Campaigns m={12} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
