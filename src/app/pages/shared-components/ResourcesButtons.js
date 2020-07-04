import React from 'react';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import {withRouter, NavLink} from 'react-router-dom';
import * as Settings from 'app/store/actions/settings';

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
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <NavLink to='/newsapi'>
        <Chip
          avatar={<Avatar>N</Avatar>}
          label="News Api"
          clickable
          onClick={()=>{dispatch(Settings.setMenuPath('newsapi'))}}
        />
      </NavLink>
      <NavLink to='/firebase'>
        <Chip
          avatar={<Avatar>F</Avatar>}
          label="Firebase "
          clickable
          onClick={()=>{dispatch(Settings.setMenuPath('firebase'))}}
        />
      </NavLink>
      <NavLink to='/drupal8'>
        <Chip
          avatar={<Avatar>D8</Avatar>}
          label="Drupal 8"
          clickable
          onClick={()=>{dispatch(Settings.setMenuPath('drupal8'))}}
        />
      </NavLink>
    </div>
  );
}

export default withRouter(ResourcesButton);
