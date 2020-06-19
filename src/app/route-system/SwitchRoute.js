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
      <Route exact path="/newsapi">
        <NewsApiResults />
      </Route>
      <Route exact path="/firebase">
        <FirebaseResults />
      </Route>
      <Route path="/save">
        <SaveContent />
      </Route>
      <Redirect from="/" to="firebase" />
    </div>
  );
}
