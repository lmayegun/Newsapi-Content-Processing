import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Typography} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import {PageLayout} from '@newsApi/components';
import ContentForm from '../shared-components/ContentForm';
import {Dialog} from '@newsApi/components/UIElements';
import {useForm} from '@newsApi/hooks';
import * as Firebase from 'app/store/actions/firebase';

const EditContent = props =>{

  const id = props.location.pathname.split('/')[4];
  const category = props.location.pathname.split('/')[3];

  const dispatch = useDispatch();
  const articleState = useSelector( state => state.firebase.firebaseContent);

  const [article, setArticle] = useState(articleState);
  const {form, handleChange, setForm} = useForm(articleState);

  useEffect(()=>{
    dispatch(Firebase.setFirebaseContent({id, category}));
  },[dispatch, id, category]);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  useEffect(()=>{
    setForm(articleState);
  },[article, setForm, articleState]);

  return(
    <PageLayout
      header={
        <h1> Edit </h1>
      }
      content={
        <>
          { (!article) && (
            <h1> no article </h1>
          )}

          { article && (
            <div>
            <ContentForm
              form={form}
              setForm={setForm}
              handleChange={handleChange}
              formType='edit'
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
                    btnTitle={"Preview"}
                    closeTitle={'Close'}
                  >
                    {/*--<a href={form.url} target="_blank" rel="noopener noreferrer"> {form.title} </a>
                    <div> {form.title} </div>
                    <div dangerouslySetInnerHTML={{__html:form.description}}/>
                    <div dangerouslySetInnerHTML={{__html:form.content}}/>*/}
                  </Dialog>
                  <Button
                    onClick={() => {dispatch(Firebase.updateFirebaseContent(form))}}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={'btn'}
                    startIcon={<SaveIcon />}
                  >
                    Update
                  </Button>
                  </>
              }
            />
          </div>
          )}
        </>
      }
    />
  );
};
export default withRouter(EditContent);
