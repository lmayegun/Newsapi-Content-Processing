import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0, 0, 0, 3),
  },
}));

const AddContentBtn = props => {
  const {title} = props;
  const classes = useStyles();

  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
        <div>{title}</div>
        <NavLink to="/new">
          <Fab color="primary" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
        </NavLink>
      </div>
    </div>
  );
}

export default AddContentBtn;
