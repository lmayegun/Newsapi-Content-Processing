import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Typography} from '@material-ui/core';

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
  const {form, handleChange, setForm} = useForm(article);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  useEffect(()=>{
      setForm(article);
  },[article, setForm]);

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
            formType='new'
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
