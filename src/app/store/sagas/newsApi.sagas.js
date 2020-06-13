import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {newsApiKey} from 'config/apiKeys';

function* setNewsApiContents( {payload} ){
  try{
    const query = payload.query ? payload.query : null;
    const country = payload.country ? payload.country : 'de';

    let request = '';

    if(!query){
      request = yield axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&${newsApiKey}`)
                            .then((response)=>{
                              console.log(response)
                              return response.data;
                            })
    }else{
      request = yield axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&q=${query}&${newsApiKey}`)
                            .then((response)=>{
                              console.log(response)
                              return response.data;
                            })
    }
    yield put({
               type:"NEWSAPI_CONTENTS_SUCCESS",
               payload: request
              })
  }catch(e){

  }
};
function* setNewsApiContent({payload}){
  try{
    console.log(payload, "re-run")

    yield put({
               type:"NEWSAPI_CONTENT_SUCCESS",
               payload
              })
  }catch(e){

  }
};

export const newsApiSagas = [
  takeLatest('SET_NEWSAPI_CONTENTS', setNewsApiContents),
  takeLatest('SET_NEWSAPI_CONTENT', setNewsApiContent),
]
