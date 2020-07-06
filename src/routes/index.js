import React from "react";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "store/store";
import urls from "utils/constants/urls";

import DashboardContainer from "containers/Dashboard";

const Routes = () => {
  const { ROUTES } = urls;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path={ROUTES.dashboard.path}
          component={DashboardContainer}
        />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
