import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Search from "Routes/Search";

const router = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default router;
