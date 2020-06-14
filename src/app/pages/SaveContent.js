import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import {makeStyles} from '@material-ui/styles';
import {useSelector, useDispatch} from 'react-redux';
import ReactQuill from 'react-quill';
import _ from '@lodash';
import 'react-quill/dist/quill.snow.css';
import {PageLayout} from '@newsApi/components';
import {useForm} from '@newsApi/hooks';
import * as Actions from 'app/store/actions/newsApi';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const sampleArticle = {
  author: "",
  content: "",
  description: "",
  publishedAt: "2020-06-13T09:37:00Z",
  source:{
    id: null,
    name: ""
  },
  title: "",
  url: "https://www.essentiallysports.com/boxing-news-anthony-joshua-im-not-interested-in-fighting-you-tyson-fury-sends-dillian-whyte-a-message/",
  urlToImage: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200212020935/Tyson-Fury-With-mic.jpg"
}

const SaveContent = ({location, placeholder, modules, formats})=>{

  const classes = useStyles();
  const dispatch = useDispatch();
  const article = useSelector( state => state.newsApi.content );

  // const [theme, setTheme] = useState();
  const [editorHtml, setEditorHtml] = useState("");
  const {form, handleChange, setForm} = useForm();

  useEffect(()=>{
    if( location.article ){
      dispatch(Actions.setNewsApiContent(location.article));
      setForm(location.article);
    }else{
      dispatch(Actions.setNewsApiContent(sampleArticle));
      setForm(sampleArticle);
    }
  },[dispatch, location.article, setForm])

  useEffect(()=>{
    if(article){
      setEditorHtml(article.description);
    }
  },[article]);

  function handleEditorHtml (content, delta, html, editor){
    setEditorHtml(content);
    setForm(_.set({...form}, "description", content ));
  }

  return(
    <PageLayout
      header={<h1> Save Content </h1>}
      content={
        <div>

          {form && (
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                onChange={handleChange}
                defaultValue={form.title}
              />
              <ReactQuill
                theme={'snow'}
                onChange={handleEditorHtml}
                value={editorHtml}
                modules={{
                  toolbar: [
                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                    [{size: []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'},
                     {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image', 'video'],
                    ['clean']
                  ],
                  clipboard: {
                    // toggle to add extra line breaks when pasting HTML:
                    matchVisual: false,
                  }
                }}
                formats={[
                  'header', 'font', 'size',
                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                  'list', 'bullet', 'indent',
                  'link', 'image', 'video'
                ]}
                bounds={'.app'}
                placeholder={'placeholder'}
               />
               <Button
                  onClick={() => dispatch(Actions.saveNewsApiContent(form))}
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
               <div dangerouslySetInnerHTML={{__html:editorHtml}}/>
            </form>
          )}
          </div>
        }
    />
  )
};
export default withRouter(SaveContent);
