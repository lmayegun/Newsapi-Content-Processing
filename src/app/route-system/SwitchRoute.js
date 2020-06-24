import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import {
         FirebaseResults,
         NewsApiResults,
         SaveContent,
        } from 'app/pages';

export default function BasicRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <NewsApiResults />
        </Route>
      </Switch>
      <Switch>
        <Route path="/newsapi">
          <NewsApiResults />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/firebase">
          <FirebaseResults />
        </Route>
      </Switch>
      <Switch>
        <Route path="/save">
          <SaveContent />
        </Route>
      </Switch>
    </>
  );
}
