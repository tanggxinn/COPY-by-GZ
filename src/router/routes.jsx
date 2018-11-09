import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "../app/App";
import Homepage from "../common/container/Homepage";
import NotFound from "../common/container/NotFound";

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}