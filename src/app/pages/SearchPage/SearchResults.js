import React from 'react';
import {Link} from 'react-router-dom'

const SearcResults = ({articles}) => {

  return(
    <div>
      { articles == null && (
          <h5> No Results </h5>
      )}

      { articles && (
        articles.map((item, index)=>{
          return(
            <div key={index}>
              <Link
                to={{
                  pathname:'/save',
                  article: item
                }}
              >
                <h5> {item.title} </h5>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearcResults;
