import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {PageLayout} from '@newsApi/components';
import ContentForm from '../shared-components/ContentForm';

const EditContent = ()=>{
  const articleState = useSelector( state => state.firebase.firebaseContent);

  const [article, setArticle] = useState(articleState);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  return(
    <PageLayout
      header={
        <h1> Edit </h1>
      }
      content={
        <div>
          <ContentForm
            article={article}
            formType='edit'
          />
        </div>
      }
    />
  );
};
export default EditContent;
