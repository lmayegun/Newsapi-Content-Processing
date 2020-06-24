import React from 'react';
import {makeStyles, Paper} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

import AppUtils from '@newsApi/AppUtils';
import Logo from './Logo';
import ResourcesButton from './ResourcesButtons';
import SearchFilter from './SearchFilter';
import AddContentBtn from './AddContentBtn';

const SearchHeader = props=>{
  const {resourcesBtn, searchFilter, addBtn} = props;
  const location = AppUtils.getLocation(props);
  const pathname = props.location.pathname;
  const classes = styles();

  return(
    <>
      <div className={classes.brand}>
        <Logo logo={location}/>
      </div>
      <Paper className={classes.container}>
        { resourcesBtn && (
          <div className={classes.resourcesWrapper}>
            <ResourcesButton />
          </div>
        )}

        { searchFilter && (
          <React.Fragment>
            <div className={classes.searchFilterWrapper}>
              <SearchFilter />
            </div>
          </React.Fragment>
        )}

        { addBtn && (
          <div className={classes.newContent}>
            <AddContentBtn title={"Firebase"}/>
            <AddContentBtn title={"Drupal 8"}/>
          </div>
        )}
      </Paper>
    </>
  );
};

const styles = makeStyles( theme => (
  {
    brand:{
      display:'flex',
      justifyContent:'center',
    },
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
      flex: 1.2,
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
      flex: 1.2,
      justifyContent:'center',
      alignItems:'center'
    }
  })
);

export default withRouter(SearchHeader);
