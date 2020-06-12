import React from 'react';

const SearcResults = ({articles}) => {

  return(
    <div>
      { articles.articles.length == 0 && (
          <h5> No Results </h5>
      )}

      { articles.articles && (
        articles.articles.map((item, index)=>{
          return(
            <div key={index}>
              <h5 onClick={()=>console.log(item)}> {item.title} </h5>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearcResults;
