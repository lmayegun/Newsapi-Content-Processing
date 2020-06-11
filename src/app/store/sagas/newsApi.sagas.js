import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {newsApiKey} from 'config/apiKeys';

function* setNewsApiContents( {payload} ){
  try{
    console.log(payload)
    const query = payload.query ? payload.query : 'boris';
    const country = payload.country ? payload.country : 'de';
    const request = yield axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&country=${country}&${newsApiKey}`)
                          .then((response)=>{
                            console.log(response)
                            return response.data;
                          })
    yield put({
               type:"NEWSAPI_CONTENT_SUCCESS",
               payload: request
              })
  }catch(e){

  }
};

export const newsApiSagas = [
  takeLatest('SET_NEWSAPI_CONTENTS', setNewsApiContents),
]
