import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {PageLayout} from '@newsApi/components';
import TableResults from './TableResults';

const SearchPage = props => {

  const {location} = props;

  const dispatch = useDispatch();

  const searchState  = useSelector( state => state.searchFilter );
  const articlesState  = useSelector( state => state.drupal8.drupal8Contents );
  const [articles, setArticles] = useState();

  useEffect(()=>{
    setArticles(articlesState);
  },[articlesState, setArticles]);

  if(!articles || articles < 1){
    return <h1> No Data </h1>
  }
  return(
    <div>
      <PageLayout
        content={
          <div>
            <TableResults
              articles={articles}
            />
          </div>
        }
      />
    </div>
  );
};

export default withRouter(SearchPage);
