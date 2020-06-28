import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {PageLayout} from '@newsApi/components';
import ContentForm from '../shared-components/ContentForm';
import * as Actions from 'app/store/actions/newsApi';

const ForwardContent = props =>{
  const dispatch = useDispatch();

  const articleState = useSelector( state => state.newsApi.newsapiContent);

  const [article, setArticle] = useState(articleState);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  const handleForward = form => {
                    dispatch(Actions.saveNewsApiContent(form));
                    props.history.push('/firebase');
                  };
  return(
    <PageLayout
      header={
        <h1> Forward </h1>
      }
      content={
        <div>
          <ContentForm
            article={article}
            formType='forward'
            forwardAction={handleForward}
          />
        </div>
      }
    />
  );
};
export default withRouter(ForwardContent);
