import {all} from 'redux-saga/effects';
import {settings} from './settings.sagas';
import {newsApiSagas} from './newsApi.sagas';
import {firebaseSagas} from './firebase.sagas';
import {drupal8Sagas} from './drupal8.sagas';

export default function* APPsagas(){
  yield all([
    ...settings,
    ...newsApiSagas,
    ...firebaseSagas,
    ...drupal8Sagas
  ]);
}
