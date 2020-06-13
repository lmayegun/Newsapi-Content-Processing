import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { SearchPage, SaveContent } from 'app/pages';

export default function BasicRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <SearchPage />
      </Route>
      <Route path="/save">
        <SaveContent />
      </Route>
    </Switch>
  );
}
