import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
         FirebaseResults,
         NewsApiResults,
         SaveContent,
        } from 'app/pages';

export default function BasicRoute() {
  return (
    <div>
      <Switch>
        <Route exact path="/newsapi">
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
      <Redirect from="/" to="/newsapi" />
    </div>
  );
}
