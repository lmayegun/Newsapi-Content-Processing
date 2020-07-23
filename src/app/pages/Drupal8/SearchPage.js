import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {PageLayout} from '@newsApi/components';
import TableResults from './TableResults';

const SearchPage = props => {

  const articlesState  = useSelector( state => state.drupal8.drupal8Contents );
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    if( articlesState !== undefined ){
      setArticles(articlesState);
    }
  },[articlesState, setArticles]);

  return(
    <div>
      <PageLayout
        content={
          <>
            {(!articles || articles < 1) && (
              <h1> No Data - please re-configure your search </h1>
            )}

            {(articles.length >= 1) && (
              <div>
                <TableResults
                  articles={articles}
                />
              </div>
            )}
          </>
        }
      />
    </div>
  );
};

export default withRouter(SearchPage);
