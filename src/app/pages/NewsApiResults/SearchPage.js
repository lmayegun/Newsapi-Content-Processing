import React, {useEffect, useState} from 'react';

import {PageLayout} from '@newsApi/components';
import TableResults from './TableResults';

const SearchPage = () => {
  return(
    <div>
      <PageLayout
        content={
          <div>
            <TableResults/>
          </div>
        }
      />
    </div>
  );
};

export default SearchPage;
