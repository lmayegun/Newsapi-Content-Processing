import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Typography, TextField, Checkbox} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import {PageLayout} from '@newsApi/components';
import ContentForm from './shared-components/ContentForm';
import {Dialog} from '@newsApi/components/UIElements';
import {useForm} from '@newsApi/hooks';
import * as Firebase from 'app/store/actions/firebase';
import * as Drupal8 from 'app/store/actions/drupal8';

const EditContent = props =>{

  const dispatch = useDispatch();

  const { articleState } = props;

  const [article, setArticle] = useState(articleState);
  const {form, handleChange, handleFile, setForm} = useForm(article);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  useEffect(()=>{
      setForm(article);
  },[article, setForm]);

  const saveContent = 
        form => {
          if( form.firebase){
            dispatch(Firebase.createFirebaseContent(form));
          }

          if( form.drupal8 ){
            dispatch(Drupal8.createContent(form));
          }

          props.history.push('/newsapi');
        };

  return(
    <PageLayout
      header={
        <h1> New Content</h1>
      }
      content={
        <div>
          <ContentForm
            form={form}
            setForm={setForm}
            handleChange={handleChange}
            handleFile={handleFile}
            formType='new'
            formImages={
              <>
                <div style={{marginBottom:20}}>
                  <Typography variant="h6"> Images </Typography>
                </div>
                <TextField
                  id="outlined-basic"
                  label="Main Image"
                  variant="outlined"
                  name="urlToImage"
                  value={form.urlToImage ? form.urlToImage : ''}
                  onChange={handleChange}
                  style={{width:33+'%'}}
                />
                <TextField
                  id="outlined-basic"
                  label="Side Thumb Image"
                  variant="outlined"
                  name="sideThumbImg"
                  value={form.sideThumbImg ? form.sideThumbImg : ''}
                  onChange={handleChange}
                  style={{width:33+'%'}}
                />
                <TextField
                  id="outlined-basic"
                  label="Center Thumb Image"
                  variant="outlined"
                  name="centerThumbImg"
                  value={form.centerThumbImg ? form.centerThumbImg : ''}
                  onChange={handleChange}
                  style={{width:33+'%'}}
                />
              </>
            }
            formActions={
              <>
                <Dialog
                  btnTitle={"Forward"}
                  color={"primary"}
                  variant={"contained"}
                  style={{display:"inline", marginRight: 10}}
                  btnIcon={<SaveIcon />}
                >
                  <div style={{alignContent:'center'}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                      Please select the source you will like to forward the content to.
                    </Typography>

                    <Checkbox
                      name="drupal8"
                      checked={form.drupal8}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />Drupal 8

                    <Checkbox
                      name="firebase"
                      checked={form.firebase}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />Firebase

                    <Button
                      onClick={(e)=>{
                        e.preventDefault();
                        saveContent(form);
                      }}
                      variant="contained"
                      color="primary"
                      size="small"
                      className={'btn'}
                    >
                       Forward
                    </Button>
                  </div>
                </Dialog>
              </>
            }
          />
        </div>
      }
    />
  )
};
export default withRouter(EditContent);

EditContent.defaultProps = {
  articleState : {
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
    url: "",
    urlToImage: ""
  }
};
