import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Dashboard from "../pages/afterLogin/dashboard/dashboard";
import Main from "../pages/beforeLogin/useCallback/main";
import UseMemo from "../pages/beforeLogin/useMemo/useMemo";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const history = createBrowserHistory();
export default function ProjectRouter() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={Main} exact={true} />
        <PublicRoute path="/useMemo" component={UseMemo} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
      </Switch>
    </Router>
  );
}
