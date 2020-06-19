import React from 'react';
import {Link} from 'react-router-dom';
import TableResults from './TableResults';

const SearcResults = ({articles}) => {

  return(
    <div>
      { (articles <= 0 || articles == null) && (
          <h5> No Results </h5>
      )}
      { articles && (
        <TableResults rows={articles}/>
      )}
    </div>
  );
};

export default SearcResults;
