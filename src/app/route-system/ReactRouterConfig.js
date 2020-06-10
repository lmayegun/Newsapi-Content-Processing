import React, {useContext, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
// import { matchRoutes } from "react-router-config";

import AppContext from 'app/AppContext';
import DefaultLayout from 'app/app-layouts/DefaultLayout';

const ReactRouterConfig = ( props ) => {
  // const appContext = useContext(AppContext);
  // const {routes} = appContext;

  useEffect(()=>{
      function routeSettingsCheck()
      {
        // const matched = matchRoutes(routes, props.location.pathname);
      }

      routeSettingsCheck();
  },[])

  return(
    <DefaultLayout />
  )
}

export default withRouter(ReactRouterConfig);
