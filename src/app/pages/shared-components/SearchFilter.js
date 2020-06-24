import React, {useEffect} from 'react';
import {makeStyles, Paper, Button, TextField} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {useDispatch} from 'react-redux';

import {useForm} from '@newsApi/hooks';
import {Select} from '@newsApi/components/FormElements';
import {withRouter} from 'react-router-dom';
import * as NewsApiActions from 'app/store/actions/newsApi';
import * as FirebaseActions from 'app/store/actions/firebase';

const SearchFilter = props =>{
  const classes = styles();
  const dispatch = useDispatch();
  const {form, handleChange, setForm} = useForm({source:"none",query: "", country: "us", category: "business"});

  useEffect(()=>{
    dispatch(FirebaseActions.getFirebaseContents(form));
  },[dispatch, form]);

  useEffect(()=>{
    setForm(form)
  },[form, setForm])

  function handleSubmit(){
    dispatch(NewsApiActions.setNewsApiContents(form));
    dispatch(FirebaseActions.getFirebaseContents(form));
  };

  return(
    <Paper className={classes.searchFilter} elevation={1}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit()
      }}>
        <div className={classes.search}>
          <Select
            label={"Source"}
            handleChange={handleChange}
            value={form.source}
            name={"source"}
            options={[{none:'None'},{business:'News Api'}, {sports:'Firebase'}, {health:'Drupal 8'}]}
            className={"source"}
          />
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
            options={[{business:'Business'}, {sports:'Sports'}, {health:'Health'}, {entertainment:'Entertaiment'}]}
            className={"selector"}
          />
          <Select
            label={"Country"}
            handleChange={handleChange}
            value={form.country}
            name={"country"}
            options={[{us:'US'}, {gb:'UK'}, {de:'Denmark'}]}
            className={"selector"}
          />
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
