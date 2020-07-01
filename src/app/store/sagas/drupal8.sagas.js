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
    const {title, category, author, content, description, publishedAt, urlToImage} = payload;
    alert(payload.title);
    axios.post('http://localhost:3000/api/articles/',{
                title,
                category,
                author,
                publishedOn: publishedAt,
                image: urlToImage,
                summary: description,
                body: content
              });
  }catch(e){

  }
};

function* deleteDrupal8Content( {payload} ){
  const {category, id} = payload;

  try{
    const request = yield database.ref(`articles/${category}/${id}`)
                                  .remove()
                                  .then(()=>{
                                    return id;
                                  });
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
