import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import {withRouter, NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const ResourcesButton = (props)=>{

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink to='/newsapi'>
        <Chip
          avatar={<Avatar>N</Avatar>}
          label="News Api"
          clickable
        />
      </NavLink>
      <NavLink to='/firebase'>
        <Chip
          avatar={<Avatar>F</Avatar>}
          label="Firebase "
          clickable
        />
      </NavLink>
      <NavLink to='/drupal8'>
        <Chip
          avatar={<Avatar>D8</Avatar>}
          label="Drupal 8"
          clickable
        />
      </NavLink>
    </div>
  );
}

export default withRouter(ResourcesButton);
