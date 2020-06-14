import React, {useEffect} from 'react';
import {makeStyles,
        Paper,
        Input,
        Icon,
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
  country: "gb",
  category: "none"
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
    container:{
      display: 'flex',
      padding: theme.spacing(1),
      background: '#122230',
      minHeight: '5rem',
      color: 'white',
      [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
      },
    },
    title:{
      display:'flex',
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    searchFilterWrapper:{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      '& .search-filter':{
        display:'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
      },
      '& .search':{
        display : 'flex',
        width: '100%',
        margin: theme.spacing(0),
        '& .magnifier-icon':{
          padding: theme.spacing(0.5),
        }
      },
      '& .filters':{
        display: 'flex',
        width: 100+'%',
        '& .selector':{
          flex: 1,
        },
      },
      '& .submit':{
        margin:theme.spacing(1),
      }
    },
    newContent:{
      display:'flex',
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    }
  })
);

const SearchPageHeader = ()=>{
  const classes = styles();
  const dispatch = useDispatch();
  const [age, setAge] = React.useState('');
  const {form, handleChange, setForm} = useForm(initFormState);

  useEffect(()=>{
    // dispatch(Actions.setNewsApiContents({query:"", country:"us", category:"entertainment"}));
  },[dispatch])

  function handleSubmit(){
    console.log(form, "losing")
    dispatch(Actions.setNewsApiContents({query:form.query, country:"gb", category:form.category}))
  }

  return(
    <div className={classes.container}>
      <div className={classes.title}> NEWS API CONTENTS </div>
      <div className={classes.searchFilterWrapper}>
        <Paper className={"search-filter"} elevation={1}>
          <div className={"search"}>
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
          <div className={"filters"}>
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
                  value={age}
                  onChange={ev => alert(ev)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>United State</MenuItem>
                  <MenuItem value={20}>United Kingdom</MenuItem>
                  <MenuItem value={30}>Denmark</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={"submit"}>
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
      </div>
      <div className={classes.newContent}> add new content </div>
    </div>
  );
};

export default SearchPageHeader;
