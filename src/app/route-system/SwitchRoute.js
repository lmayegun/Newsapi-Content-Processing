import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import {
         FirebaseResults,
         NewsApiResults,
         EditContent,
         NewContent,
         ForwardContent
        } from 'app/pages';

export default function BasicRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <EditContent />
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
        <Route path="/edit">
          <EditContent />
        </Route>
      </Switch>
      <Switch>
        <Route path="/new">
          <NewContent />
        </Route>
      </Switch>
      <Switch>
        <Route path="/forward">
          <ForwardContent />
        </Route>
      </Switch>
    </>
  );
}
