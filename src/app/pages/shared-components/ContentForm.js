import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Typography} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import {makeStyles} from '@material-ui/styles';
import {useSelector, useDispatch} from 'react-redux';
import _ from '@lodash';

import {Select, TextEditor, TagsSelect} from '@newsApi/components/FormElements';
import {Dialog} from '@newsApi/components/UIElements';
import {useForm} from '@newsApi/hooks';
import * as Actions from 'app/store/actions/newsApi';

const ContentForm = (props)=>{

  const { formType, formActions, form, setForm, handleChange} = props;

  const classes = useStyles();

  function handleChipChange(value, name){
    setForm(_.set({...form}, name, value.map(item => item.value)));
  };

  return(
    <div>
      {(form || (formType === 'new') ) && (
        <form className={classes.root} noValidate autoComplete="off">
          <div style={{flex:4}}>
            <div className={classes.field}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                value={form.title ? form.title : ''}
                onChange={handleChange}
                style={{width:100+'%'}}
              />
            </div>

            <div className={classes.field}>
              <TextEditor
                label={"Description"}
                name={"description"}
                setForm={setForm}
                form={form}
                value={form.description ? form.description : ''}
              />
            </div>

            <div className={classes.field}>
              <TextEditor
                label={"Body"}
                name={"content"}
                setForm={setForm}
                form={form}
                value={form.content ? form.content : ""}
              />
            </div>
          </div>
          <div style={{flex:2}}>

            <div className={classes.field}>
              <Select
                label={"Category"}
                handleChange={handleChange}
                value={form.category}
                name={"category"}
                options={[{news:'News'}, {knowledge:'Knowledge'}, {health:'Health'}, {sport:'Sports'}, {business:'Business'}, {entertainment:'Entertainment'}]}
                className={"selector"}
              />
            </div>

            <div className={classes.field}>
              <TextField
                id="outlined-basic"
                label="Author"
                variant="outlined"
                name="author"
                onChange={handleChange}
                value={form.author}
                style={{width:100+'%'}}
              />
            </div>

            <div className={classes.field}>
              <TextField
                type="datetime-local"
                id="outlined-basic"
                variant="outlined"
                name="publishedAt"
                onChange={handleChange}
                value={form.publishedAt}
                style={{width:100+'%'}}
              />
            </div>

            <div className={classes.field}>
              <TagsSelect
                  className="mt-8 mb-24"
                  value={
                    form.tags.map(item => ({
                      value: item,
                      label: item
                    }))
                  }
                  onChange={(value) => handleChipChange(value, 'tags')}
                  placeholder="Select multiple categories"
                  textFieldProps={{
                      label : 'Tags',
                      InputLabelProps: {
                          shrink: true
                      },
                      variant : 'outlined'
                  }}
                  isMulti
                />
            </div>
          </div>
        </form>
      )}
      <div className={classes.fieldAction}>
       {formActions && (
         formActions
       )}

       {formType === 'new' && (
         <>
           <Button
              onClick={() => {alert('preview')}}
              variant="contained"
              color="primary"
              size="small"
              className={'btn'}
              startIcon={<SaveIcon />}
            >
              Preview
            </Button>
            <Button
               onClick={() => {alert("")}}
               variant="contained"
               color="primary"
               size="small"
                className={'btn'}
               startIcon={<SaveIcon />}
             >
               Save
             </Button>
             <Dialog
               btnTitle={"Forward"}
               color={"primary"}
               variant={"contained"}
               style={{display:"inline", marginRight: 10}}
               btnIcon={<SaveIcon />}
             >
               <div style={{alignContent:'center'}}>
                 <Typography variant="h4" component="h1" gutterBottom>
                   You are about to forward this content to firbase store.
                 </Typography>
                 <Button
                   onClick={(e)=>{
                     e.preventDefault();
                   }}
                   variant="contained"
                   color="primary"
                   size="small"
                   className={'btn'}
                   startIcon={<SaveIcon />}
                 >
                   Save To Firebase
                 </Button>
               </div>
             </Dialog>
         </>
       )}
      </div>
    </div>
  )
};

export default withRouter(React.memo(ContentForm));


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: 100+'%',
    },
    [theme.breakpoints.down('md')]:{
      flexDirection:'column'
    }
  },
  reactQuill:{
    minHeight: 500
  },
  field:{
    margin: theme.spacing(3, 1, 1, 0),
    width: 100+'%',
    display: 'inline-block',
  },
  selector:{
    margin: theme.spacing(3, 1, 1, 0),
    width: 99+'%',
  },
  fieldAction:{
    display:'flex',
    justifyContent:'center',
    margin:theme.spacing(5),
    '& .btn':{
      margin:2,
    }
  }
}));

ContentForm.defaultProps = {
   sampleArticle: {
    author: "",
    description: "",
    content: "",
    category: "news",
    publishedAt: "2020-06-13T09:37:00Z",
    tags:[],
    source:{
      id: null,
      name: ""
    },
    title: "",
    url: "https://www.essentiallysports.com/boxing-news-anthony-joshua-im-not-interested-in-fighting-you-tyson-fury-sends-dillian-whyte-a-message/",
    urlToImage: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200212020935/Tyson-Fury-With-mic.jpg"
  }
}
