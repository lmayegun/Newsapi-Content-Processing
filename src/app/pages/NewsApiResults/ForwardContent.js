import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Typography} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import {PageLayout} from '@newsApi/components';
import ContentForm from '../shared-components/ContentForm';
import {Dialog} from '@newsApi/components/UIElements';
import {useForm} from '@newsApi/hooks';
import * as Firebase from 'app/store/actions/firebase';
import * as Drupal8 from 'app/store/actions/drupal8';

const ForwardContent = props =>{
  const dispatch = useDispatch();

  const articleState = useSelector( state => state.newsApi.newsapiContent);

  const [article, setArticle] = useState(articleState);
  const {form, handleChange, setForm} = useForm(article);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  useEffect(()=>{
      setForm(article);
  },[article, setForm]);

  const saveContent = form => {
                    dispatch(Firebase.createFirebaseContent(form));
                    dispatch(Drupal8.createContent(form));
                    // props.history.push('/firebase');
                  };
  return(
    <PageLayout
      header={
        <h1> Forward </h1>
      }
      content={
        <div>
          <ContentForm
            form={form}
            setForm={setForm}
            handleChange={handleChange}
            formType='forward'
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
  );
};
export default withRouter(ForwardContent);
