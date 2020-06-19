import React from 'react';
import {makeStyles, Paper} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

import ResourcesButton from 'app/pages/shared-components/ResourcesButtons';
import SearchFilter from 'app/pages/shared-components/SearchFilter';

const styles = makeStyles( theme => (
  {
    container:{
      display: 'flex',
      padding: theme.spacing(1),
      background: '#122230',
      minHeight: '18rem',
      color: 'white',
      [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
      },
    },
    resourcesWrapper:{
      display:'flex',
      flex: 1.5,
      justifyContent:'center',
      alignItems:'center'
    },
    searchFilterWrapper:{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    newContent:{
      display:'flex',
      flex: 1.5,
      justifyContent:'center',
      alignItems:'center'
    }
  })
);

const SearchHeader = (props)=>{
  console.log(props.location.pathname, "late");
  const pathname = props.location.pathname;
  const classes = styles();

  return(
    <Paper className={classes.container}>
      <div className={classes.resourcesWrapper}>
        <ResourcesButton />
      </div>
      { pathname != '/save' && (
        <React.Fragment>
          <div className={classes.searchFilterWrapper}>
            <SearchFilter />
          </div>

          <div className={classes.newContent}>
            dd new content
          </div>
        </React.Fragment>
      )}
    </Paper>
  );
};

export default withRouter(SearchHeader);
