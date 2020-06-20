import {put, takeLatest} from 'redux-saga/effects';
import _ from '@lodash';
import database from '../../../firebase/firebase';

function* getFirebaseContents(payload){
  try{
    const request = yield database.ref('health')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 0, 10);
                            });
    console.log(request);
  }catch(e){

  }
}

export const firebaseSagas = [
  takeLatest("GET_FIREBASE_CONTENTS", getFirebaseContents),
]
