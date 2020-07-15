import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* getDrupal8Contents({payload}){
  const {category, query} = payload;
  const searchText = (query) ? `&search=${query}` : '';
  try{
    const request = 
    yield axios
      .get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=${category}` + searchText)
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
  const {id} = payload;
  
  try{
    const request = 
    yield axios
      .get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/${id}`)
        .then( res => {
          return res.data;
        })
        .catch(err =>{
          console.log(err);
        });
    
    // if( request.article.tags.length() < 0){
    //   request.article.tags = [];
    // }

    console.log(request,"last night")
    yield put({type:"SET_D8_CONTENT_SUCCESS", payload: request.article});
  }catch(e){

  }
};

function* createDrupal8Content({payload}){
  try{

    var bodyFormData = new FormData();
    bodyFormData.append('image', payload.thumbImageFile);
    bodyFormData.append('urlToImage', payload.urlToImage);
    bodyFormData.append('sideThumbImg', payload.sideThumbImg);
    bodyFormData.append('centerThumbImg', payload.centerThumbImg);
    bodyFormData.append('title', payload.title);
    bodyFormData.append('category', payload.category);
    bodyFormData.append('author', payload.author);
    bodyFormData.append('description', payload.description);
    bodyFormData.append('content', payload.content);
    bodyFormData.append('summary', payload.description);
    bodyFormData.append('body', payload.content);
    bodyFormData.append('publishedOn', payload.publishedAt);
    bodyFormData.append('tags', payload.tags);

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/articles/',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (response) {
          console.log(response);
      });

      yield put({type:"CREATE_D8_CONTENT_SUCCESS", payload:payload});

  }catch(e){

  }
};

function* deleteDrupal8Content( {payload} ){
  const {id} = payload;

  try{
    const request = 
    yield axios
      .delete(`http://localhost:3000/api/articles/${id}`)
        .then((res)=>{
          console.log(res,'delete');
          return res.data;
        })
        .catch((err)=>{
          console.log(err);
        })

    yield put({type:"DELETE_D8_CONTENT_SUCCESS",payload:request.res.id});
  }catch(err){

  }
}

export const drupal8Sagas = [
  takeLatest("GET_D8_CONTENTS", getDrupal8Contents),
  takeLatest("SET_D8_CONTENT", setDrupal8Content),
  takeLatest("CREATE_D8_CONTENT", createDrupal8Content),
  takeLatest("DELETE_D8_CONTENT", deleteDrupal8Content ),
]
