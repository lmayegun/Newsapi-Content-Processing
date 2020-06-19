import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {PageLayout} from '@newsApi/components';
import SearchHeader from 'app/pages/shared-components/SearchHeader';
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
            <SearchResults articles={articles}/>
          </div>
        }
      />
    </div>
  );
};

export default SearchPage;
