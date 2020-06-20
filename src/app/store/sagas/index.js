import {all} from 'redux-saga/effects';
import {settings} from './settings.sagas';
import {newsApiSagas} from './newsApi.sagas';
import {firebaseSagas} from './firebase.sagas';

export default function* APPsagas(){
  yield all([
    ...settings,
    ...newsApiSagas,
    ...firebaseSagas
  ]);
}
