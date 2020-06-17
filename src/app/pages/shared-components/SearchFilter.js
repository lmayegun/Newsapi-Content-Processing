import React, {useEffect} from 'react';
import {makeStyles,
        Paper,
        Button,
        InputLabel,
        MenuItem,
        Select,
        FormControl,
        TextField
      } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {useDispatch} from 'react-redux';
import {useForm} from '@newsApi/hooks';

import * as Actions from 'app/store/actions/newsApi';

const initFormState = {
  query: "",
  country: "us",
  category: "business"
}

const styles = makeStyles( theme => (
  {
    selector:{
      marginBottom: theme.spacing(2),
      width: 99+'%',
    },
    textField:{
      marginBottom: theme.spacing(2),
      width: 99+'%',
    },
    searchFilter:{
      display:'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
    },
    search:{
      display : 'flex',
      width: '100%',
      margin: theme.spacing(0),
      '& .magnifier-icon':{
        padding: theme.spacing(0.5),
      }
    },
    filters:{
      display: 'flex',
      width: 100+'%',
      '& .selector':{
        flex: 1,
      },
    },
    submit:{
      margin:theme.spacing(1),
    }
  })
);

const SearchFilter = ()=>{
  const classes = styles();
  const dispatch = useDispatch();
  const {form, handleChange, setForm} = useForm(initFormState);

  useEffect(()=>{
    dispatch(Actions.setNewsApiContents({query:form.query, country:form.country, category:form.category}))
  },[dispatch, form])

  function handleSubmit(){
    dispatch(Actions.setNewsApiContents({query:form.query, country:form.country, category:form.category}))
  }

  return(
    <Paper className={classes.searchFilter} elevation={1}>
      <div className={classes.search}>
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
        <div className={"selector"}>
          <FormControl className={classes.selector}>
            <InputLabel id="demo-customized-select-label">Category</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={form.category}
              name={"category"}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'business'}>Business</MenuItem>
              <MenuItem value={'health'}>Health</MenuItem>
              <MenuItem value={'sports'}>Sports</MenuItem>
              <MenuItem value={'entertainment'}>Entertainment</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={"selector"}>
          <FormControl className={classes.selector}>
            <InputLabel id="demo-customized-select-label">Country</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={form.country}
              name="country"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"us"}>United State</MenuItem>
              <MenuItem value={"gb"}>United Kingdom</MenuItem>
              <MenuItem value={"dm"}>Denmark</MenuItem>
            </Select>
          </FormControl>
        </div>
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
    </Paper>
  );
};

export default SearchFilter;
