import React from 'react';

import {PageLayout} from '@newsApi/components';
import ContentForm from './shared-components/ContentForm';

const EditContent = ()=>{
  return(
    <PageLayout
      header={
        <h1> New Content</h1>
      }
      content={
        <div>
          <ContentForm
            article={{...article}}
            formType='new'
          />
        </div>
      }
    />
  )
};
export default EditContent;

const article = {
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
};
