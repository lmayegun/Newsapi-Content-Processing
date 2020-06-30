import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import {
         FirebaseResults,
         FirebaseEditContent,
         D8Results,
         D8EditContent,
         NewsApiResults,
         NewContent,
         ForwardContent
        } from 'app/pages';
import SearchHeader from 'app/pages/shared-components/SearchHeader';

export default function BasicRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <FirebaseEditContent />
        </Route>
        <Route path="/new">
          <NewContent />
        </Route>
        <Route path="/firebase/edit">
          <FirebaseEditContent />
        </Route>
        <Route path="/firebase">
          <FirebaseResults />
        </Route>
        <Route path="/drupal8/edit">
          <D8EditContent />
        </Route>
        <Route path="/drupal8">
          <D8Results />
        </Route>
        <Route path="/newsapi/forward">
          <ForwardContent />
        </Route>
        <Route path="/newsapi">
          <NewsApiResults />
        </Route>
      </Switch>
    </>
  );
};
