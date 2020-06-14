import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {PageLayout} from '@newsApi/components';
import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults';
import * as Actions from 'app/store/actions/newsApi';

const SearchPage = () => {
  const dispatch                  = useDispatch();
  const articlesSelector          = useSelector( state => state.newsApi.contents );
  const [articles, setArticles]   = useState(articlesSelector);

  useEffect(()=>{
    dispatch(Actions.setNewsApiContents({query:"", country:"us", category:"entertainment"}));
  },[dispatch])

  useEffect(()=>{
    setArticles(articlesSelector);
  },[articlesSelector]);

  if(!articles){
    return <h1> Loadinng... </h1>
  }

  return(
    <PageLayout
      header={
        <SearchPageHeader />
      }
      content={
        <SearchResults articles={articles}/>
      }
    />
  );
};

export default SearchPage;
