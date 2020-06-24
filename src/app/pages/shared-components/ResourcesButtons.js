import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import {withRouter} from 'react-router-dom';

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
  const [path, setPath] = useState('');

  useEffect(()=>{
    props.history.push(path);
  },[path, props.history])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar>N</Avatar>}
        label="News Api"
        clickable
        onClick={()=>{setPath('newsapi')}}
      />
      <Chip
        avatar={<Avatar>F</Avatar>}
        label="Firebase "
        clickable
        onClick={()=>{setPath('firebase')}}
      />
      <Chip
        avatar={<Avatar>D8</Avatar>}
        label="Drupal 8"
        clickable
        onClick={()=>{setPath('drupal8')}}
      />
    </div>
  );
}

export default withRouter(ResourcesButton);
