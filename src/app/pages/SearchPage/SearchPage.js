import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {PageLayout} from '@newsApi/components';
import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults';

const SearchPage = () => {

  const articlesSelector          = useSelector( state => state.newsApi.contents );
  const [articles, setArticles]   = useState(articlesSelector);

  useEffect(()=>{
    setArticles(articlesSelector);
  },[articlesSelector]);

  return(
    <div>
      <PageLayout
        header={
          <SearchPageHeader />
        }
        content={
          <SearchResults articles={articles}/>
        }
      />
    </div>
  );
};

export default SearchPage;
