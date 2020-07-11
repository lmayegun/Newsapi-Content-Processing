import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Typography, TextField} from '@material-ui/core';
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

  const saveContent = form => {
                    dispatch(Firebase.createFirebaseContent(form));
                    dispatch(Drupal8.createContent(form));
                    props.history.push('/firebase');
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
                      You are about to forward this content selected database.
                    </Typography>
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
    author: "aaaaaa",
    description: "",
    content: "",
    category: "news",
    publishedAt: "2020-06-13T09:37:00Z",
    tags:[],
    source:{
      id: null,
      name: ""
    },
    title: "aaaaaaalukmon",
    url: "https://www.essentiallysports.com/boxing-news-anthony-joshua-im-not-interested-in-fighting-you-tyson-fury-sends-dillian-whyte-a-message/",
    urlToImage: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200212020935/Tyson-Fury-With-mic.jpg"
  }
};
