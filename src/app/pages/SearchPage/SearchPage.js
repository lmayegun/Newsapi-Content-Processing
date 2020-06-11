import React from 'react';

import {PageLayout} from 'app/components';
import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults';

const SearchPage = () => {
  return(
    <PageLayout
      header={
        <SearchPageHeader />
      }
      content={
        <SearchResults />
      }
    />
  );
};

export default SearchPage;
