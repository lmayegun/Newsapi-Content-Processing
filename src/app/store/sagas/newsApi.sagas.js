import {put, takeLatest} from 'redux-saga/effects';

function* setNewsApiContents( payload ){
  try{
    console.log(payload)
  }catch(e){

  }
};

export const newsApiSagas = [
  takeLatest('SET_NEWSAPI_CONTENTS', setNewsApiContents),
]
