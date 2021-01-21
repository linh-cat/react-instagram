import React from "react";
import { Route, Switch } from "react-router-dom";
import Edit from "./pages/edit/Edit";
import Feed from "./pages/Feed/Feed";
import New from "./pages/New/New";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
      <Route path="/post/:id" component={Edit} />
    </Switch>
  );
}

export default Routes;
