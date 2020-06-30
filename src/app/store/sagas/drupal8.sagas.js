import {put, takeLatest} from 'redux-saga/effects';
import _ from '@lodash';
import database from '../../../firebase/firebase';

function* getDrupal8Contents({payload}){
  const {category} = payload;

  try{
    const request = yield database.ref(`articles/${category}`)
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.reverse(articles);
                            });
    yield put({type:"GET_D8_CONTENTS_SUCCESS",payload:request});
  }catch(e){

  }
}

function* setDrupal8Content({payload}){
  try{
    // alert(payload.title);
    payload.tags = [];
    yield put({
               type:"SET_D8_CONTENT_SUCCESS",
               payload
              })
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
  takeLatest("DELETE_D8_CONTENT", deleteDrupal8Content ),
]
