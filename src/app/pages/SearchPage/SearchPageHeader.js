import React from 'react';
import {makeStyles, Paper, Button, Input, Icon, Typography} from '@material-ui/core';

const styles = makeStyles( theme => ({
    container:{
      display: 'flex',
    },
    title:{
      flex: 1,
    },
    searchFilter:{
      flex: 4,
    },
    newContent:{

    }
  })
);

const SearchPageHeader = ()=>{

  const classes = styles();
  return(
    <div className={classes.container}>
      <div className={classes.title}> NEWS API CONTENTS </div>
      <div className={classes.searchFilter}>
        <Paper className={""} elevation={1}>
ss
            <Icon className={""} color="action">search</Icon>

            <Input
                placeholder="Search"
                className={""}
                disableUnderline
                fullWidth
                value={"searchText"}
                inputProps={{
                    'aria-label': 'Search'
                }}
                onChange={ev => alert(ev)}
            />
        </Paper>
      </div>
      <div className={classes.newContent}> add new content </div>
    </div>
  );
};

export default SearchPageHeader;
