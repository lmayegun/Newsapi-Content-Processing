import {put, takeLatest} from 'redux-saga/effects';
import _ from '@lodash';
import database from '../../../firebase/firebase';

function* getFirebaseContents({payload}){
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
    yield put({type:"GET_FIREBASE_CONTENTS_SUCCESS",payload:request});
  }catch(e){

  }
}

function* setFirebaseContent({payload}){
    const {category, id} = payload;

  try{
    const request = yield database.ref(`articles/${category}/${id}`)
                            .once('value')
                            .then(function(snapshot) {
                              console.log(snapshot.val(), "mem e")
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return snapshot.val();
                            });
                            
    if(request.tags === undefined){
      request.tags = [];
    };

    yield put({
               type:"SET_FIREBASE_CONTENT_SUCCESS",
               payload: request
              })
  }catch(e){

  }
};

function* createFirebaseContent({payload}){
  try{
    database.ref(`articles/${payload.category}`).push({
      ...payload,
      source: payload.source.name
    });
    yield put({type:"SET_FIREBASE_CONTENT_SUCCESS",payload})
  }catch(e){

  }
};

function* updateFirebaseContent({payload}){
  const {category, id} = payload;
  try{
    database.ref(`articles/${category}/${id}`).set({
      ...payload
    });
    yield put({type:"UPDATE_FIREBASE_CONTENT_SUCCESS",payload})
  }catch(e){

  }
};

function* deleteContent( {payload} ){
  const {category, id} = payload;
  try{
    const request = yield database.ref(`articles/${category}/${id}`)
                                  .remove()
                                  .then(()=>{
                                    return id;
                                  });
    yield put({type:"DELETE_FIREBASE_CONTENT_SUCCESS",payload:request});
  }catch(err){

  }
}

export const firebaseSagas = [
  takeLatest("GET_FIREBASE_CONTENTS", getFirebaseContents),
  takeLatest("SET_FIREBASE_CONTENT", setFirebaseContent),
  takeLatest("CREATE_FIREBASE_CONTENT", createFirebaseContent),
  takeLatest("UPDATE_FIREBASE_CONTENT", updateFirebaseContent),
  takeLatest("DELETE_FIREBASE_CONTENT", deleteContent ),
]
