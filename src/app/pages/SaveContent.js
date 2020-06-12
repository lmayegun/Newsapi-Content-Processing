import React from 'react';
import {withRouter} from 'react-router-dom';

const SaveContent = ({location})=>{
  console.log(location.article, "peace");
  const article = location.article;
  if(!article){
    return <h1> No Article to work on </h1>
  }
  return(
    <div>
      <h1> Save Content </h1>
      <input
        placeholder={article.title}
        />
    </div>
  )
};

export default withRouter(SaveContent);
