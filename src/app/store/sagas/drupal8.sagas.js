import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import _ from '@lodash';
import database from '../../../firebase/firebase';

function* getDrupal8Contents({payload}){
  const {category} = payload;

  try{
    const request = yield axios.get(`http://localhost:3000/api/articles/?category=${category}`)
                                .then( res => {
                                  return res.data;
                                })
                                .catch(err =>{
                                  console.log(err);
                                });
    yield put({type:"GET_D8_CONTENTS_SUCCESS",payload:request});
  }catch(e){

  }
}

function* setDrupal8Content({payload}){
  try{
    payload.tags = [];
    yield put({
               type:"SET_D8_CONTENT_SUCCESS",
               payload
              })
  }catch(e){

  }
};

function* createDrupal8Content({payload}){
  try{
    const {title, category, author, content, description, publishedAt, urlToImage, thumbImage} = payload;

    var bodyFormData = new FormData();
    bodyFormData.append('image', thumbImage);
    bodyFormData.append('title', title);
    bodyFormData.append('category', category);
    bodyFormData.append('author', author);
    bodyFormData.append('summary', description);
    bodyFormData.append('body', content);
    bodyFormData.append('publishedOn', publishedAt);

    console.log(bodyFormData, "data before sending to backend");
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/articles/',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });

  }catch(e){

  }
};

function* deleteDrupal8Content( {payload} ){
  const {category, id} = payload;

  try{
    const request = yield axios.delete(`http://localhost:3000/api/articles/${id}`)
                                .then((res)=>{
                                  console.log(res,'delete');
                                  return res.data;
                                })
                                .catch((err)=>{
                                  console.log(err);
                                })
    yield put({type:"DELETE_D8_CONTENT_SUCCESS",payload:request});
  }catch(err){

  }
}



export const drupal8Sagas = [
  takeLatest("GET_D8_CONTENTS", getDrupal8Contents),
  takeLatest("SET_D8_CONTENT", setDrupal8Content),
  takeLatest("CREATE_D8_CONTENT", createDrupal8Content),
  takeLatest("DELETE_D8_CONTENT", deleteDrupal8Content ),
]
