import React from 'react';
import {makeStyles} from '@material-ui/styles';

const styles = makeStyles( theme => ({
    root:{
      width: theme.primaryWidth,
      margin: 'auto'
    }
  })
);

const PageLayout = ({content, header}) => {
  const classes = styles();
  return(
    <div className={classes.root}>
      {header && (
        <div>
          {header}
        </div>
      )}

      {content && (
        <div>
          {content}
        </div>
      )}
    </div>
  );
};

export default PageLayout;
