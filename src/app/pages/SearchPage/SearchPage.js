import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {PageLayout} from '@newsApi/components';
import SearchHeader from './SearchHeader';
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
        content={
          <div>
            <SearchHeader />
            <SearchResults articles={articles}/>
          </div>
        }
      />
    </div>
  );
};

export default SearchPage;
