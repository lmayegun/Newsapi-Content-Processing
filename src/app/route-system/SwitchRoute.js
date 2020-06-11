import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { SearchPage } from 'app/pages';

export default function BasicRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <SearchPage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
