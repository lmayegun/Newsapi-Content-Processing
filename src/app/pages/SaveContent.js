import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useSelector, useDispatch} from 'react-redux';
import ReactQuill from 'react-quill';
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

const SaveContent = ({location, placeholder, modules, formats})=>{

  const classes = useStyles();
  const dispatch = useDispatch();
  const article = useSelector( state => state.newsApi.content );

  const [theme, setTheme] = useState();
  const [editorHtml, setEditorHtml] = useState("Smaple Text");
  const {form, handleChange, setForm} = useForm(article);

  useEffect(()=>{
    dispatch(Actions.setNewsApiContent(location.article));
  },[dispatch, location.article])

  useEffect(()=>{
    if(article){
      setEditorHtml(article.description);
      setForm(article)
    }
  },[article]);

  function handleEditorHtml (content, delta, html, editor){
    setEditorHtml(content);
  }

  console.log(form, "coldplay");

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
               <div dangerouslySetInnerHTML={{__html:editorHtml}}/>
            </form>
          )}

          {!form && (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  defaultValue={"Timer"}
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
                 <div dangerouslySetInnerHTML={{__html:editorHtml}}/>
              </form>
            )}
          </div>
        }
    />
  )
};
export default withRouter(SaveContent);
