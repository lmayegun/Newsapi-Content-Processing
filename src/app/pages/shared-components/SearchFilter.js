import React, {useEffect, useState} from 'react';
import {makeStyles, Paper, Button, TextField, Typography} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {useSelector, useDispatch} from 'react-redux';

import {useForm} from '@newsApi/hooks';
import {Select} from '@newsApi/components/FormElements';
import {withRouter} from 'react-router-dom';
import * as SearchActions from 'app/store/actions/forms';
import * as Firebase from 'app/store/actions/firebase';
import * as Drupal8 from 'app/store/actions/drupal8';
import * as NewsApi from 'app/store/actions/newsApi';

const SearchFilter = props =>{
  const classes = styles();
  const dispatch = useDispatch();
  const searchFilterState = useSelector( state => state.searchFilter );
  const sourcePath = useSelector( state => state.navigation.sourcePathState );
  const {form, handleChange, setForm} = useForm(searchFilterState);
  const [source, setSource] = useState(sourcePath);

  useEffect(()=>{
    // setForm(form)
    // dispatch(SearchActions.setSearchForm(form));
    // dispatch(NewsApi.getNewsApiContents(form));
  },[dispatch, form, setForm])

  useEffect(()=>{
    setSource(sourcePath);
  },[setSource, sourcePath]);

  function handleSubmit(){
    dispatch(Firebase.getFirebaseContents(form));
    dispatch(Drupal8.getDrupal8Contents(form));
    dispatch(NewsApi.getNewsApiContents(form));
  };

  return(
    <Paper className={classes.searchFilter} elevation={1}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit()
      }}>
        <div className={classes.search}>
          <Typography variant={'h4'} align={'center'}> {source.toUpperCase()} </Typography>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            name="query"
            onChange={handleChange}
            value={form.query}
          />
        </div>
        <div className={classes.filters}>
          <Select
            label={"Category"}
            handleChange={handleChange}
            value={form.category}
            name={"category"}
            options={[{news:'News'}, {knowledge:'Knowledge'}, {health:'Health'}, {sport:'Sports'}, {business:'Business'}, {entertainment:'Entertainment'}]}
            className={"selector"}
          />
          {source === 'newsapi' && (
            <>
              <Select
                label={"Country"}
                handleChange={handleChange}
                value={form.country}
                name={"country"}
                options={[{us:'US'}, {gb:'UK'}, {de:'Denmark'}]}
                className={"selector"}
              />
            </>
          )}
        </div>
        <div className={classes.submit}>
          <Button
             onClick={handleSubmit}
             variant="contained"
             color="primary"
             size="small"
             className={classes.button}
             startIcon={<SendIcon />}
           >
             Submit
           </Button>
        </div>
      </form>
    </Paper>
  );
};

export default withRouter(SearchFilter);

const styles = makeStyles( theme => (
  {
    searchFilter:{
      display:'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
      '& form':{
        width: 100+'%',
      }
    },
    textField:{
      marginBottom: theme.spacing(2),
      width: 99+'%',
    },
    search:{
      display : 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: theme.spacing(0),
      '& .source':{
        flex: 1,
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(1.5)
      },
      '& .magnifier-icon':{
        padding: theme.spacing(0.5),
      }
    },
    filters:{
      display: 'flex',
      width: 100+'%',
      '& .selector':{
        flex: 1,
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(1.5)
      },
    },
    submit:{
      display: 'flex',
      justifyContent:'center',
      marginVerical:theme.spacing(2),
    }
  })
);
