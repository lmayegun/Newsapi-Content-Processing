import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {TextField, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
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
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: 100+'%',
    },
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

const SaveContent = (props)=>{

  const {location, placeholder, modules, formats} = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const article = useSelector( state => state.newsApi.content );

  // const [theme, setTheme] = useState();
  const [editorHtmlDescr, setEditorHtmlDescr] = useState("");
  const [editorHtmlContent, setEditorHtmlContent] = useState("");
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
      setEditorHtmlDescr(article.description);
      setEditorHtmlContent(article.content);
    }
  },[article]);

  function handleEditorHtmlDescr (content, delta, html, editor){
    setEditorHtmlDescr(content);
    setForm(_.set({...form}, "description", content ));
  }

  function handleEditorHtmlContent (content, delta, html, editor){
    setEditorHtmlContent(content);
    setForm(_.set({...form}, "content", content ));
  }

  return(
    <PageLayout
      header={<h1> Save Content </h1>}
      content={
        <div>
          {form && (
            <form className={classes.root} noValidate autoComplete="off">
              <div style={{flex:4}}>
                <div className={classes.field}>
                  <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name="title"
                    onChange={handleChange}
                    defaultValue={form.title}
                    style={{width:100+'%'}}
                  />
                </div>

                <div className={classes.field}>
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
                      <MenuItem value={'knowledge'}>Knowledge</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={classes.field}>
                  <h3> Description </h3>
                  <ReactQuill
                    theme={'snow'}
                    onChange={handleEditorHtmlDescr}
                    value={editorHtmlDescr}
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
                    style={{height:100}}
                   />
                </div>

                <div className={classes.field}>
                 <h3> Body </h3>
                 <ReactQuill
                   theme={'snow'}
                   onChange={handleEditorHtmlContent}
                   value={editorHtmlContent}
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
                   style={{height:500, marginBottom:60}}
                  />
                </div>

                <div className={classes.field}>
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
                </div>
              </div>
              <div style={{flex:3}}>
                <a href={article.url} target="_blank" rel="noopener noreferrer"> {article.title} </a>
                <div> {form.title} </div>
                <div dangerouslySetInnerHTML={{__html:editorHtmlDescr}}/>
                <div dangerouslySetInnerHTML={{__html:editorHtmlContent}}/>
              </div>
            </form>
          )}
          </div>
        }
    />
  )
};
export default withRouter(SaveContent);
