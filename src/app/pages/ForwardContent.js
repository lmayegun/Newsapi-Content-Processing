import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Typography} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import {makeStyles} from '@material-ui/styles';
import {useSelector, useDispatch} from 'react-redux';
import _ from '@lodash';

import {Select, TextEditor} from '@newsApi/components/FormElements';
import {PageLayout} from '@newsApi/components';
import {Dialog} from '@newsApi/components/UIElements';
import {useForm} from '@newsApi/hooks';
import * as Actions from 'app/store/actions/newsApi';

const ForwardContent = (props)=>{

  const {location} = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const article = useSelector( state => state.newsApi.content );

  const [editorHtmlDescr, setDescription] = useState("");
  const [editorHtmlContent, setBody] = useState("");
  const {form, handleChange, setForm} = useForm(sampleArticle);

  useEffect(()=>{

  })

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
      setDescription(article.description);
      setBody(article.content);
    }
  },[article]);

  function handleEditorDescription (content, delta, html, editor){
    setDescription(content);
    setForm(_.set({...form}, "description", content ));
  }

  function handleEditorBody (content, delta, html, editor){
    setBody(content);
    setForm(_.set({...form}, "content", content ));
  }

  function handleForward(){
    dispatch(Actions.saveNewsApiContent(form));
    props.history.push('/firebase');
  }

  return(
    <PageLayout
      header={<h1> Forward Content </h1>}
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
                    value={form.title}
                    onChange={handleChange}
                    style={{width:100+'%'}}
                  />
                </div>

                <div className={classes.field}>
                  <TextEditor
                    label={"Description"}
                    handleEditorChange={handleEditorDescription}
                    value={editorHtmlDescr}
                  />
                </div>

                <div className={classes.field}>
                  <TextEditor
                    label={"Body"}
                    handleEditorChange={handleEditorBody}
                    value={editorHtmlContent}
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
              </div>
            </form>
          )}
          <div className={classes.fieldAction}>
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
                onClick={handleForward}
                variant="contained"
                color="primary"
                size="small"
                className={'btn'}
                startIcon={<SaveIcon />}
              >
                Forward Content
              </Button>
            </div>
          </Dialog>
          </div>
          </div>
        }
    />
  )
};
export default withRouter(ForwardContent);


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

const sampleArticle = {
  author: "",
  content: "",
  category: "news",
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
