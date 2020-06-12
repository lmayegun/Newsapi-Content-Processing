import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {PageLayout} from 'app/components';
import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults';

const SearchPage = () => {

  const articlesSelector        = useSelector( state => state.newsApi.contents );
  const [articles, setArticles]  = useState(articlesSelector);

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
