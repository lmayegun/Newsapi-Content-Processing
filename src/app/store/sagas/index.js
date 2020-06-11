import {all} from 'redux-saga/effects';
import {settings} from './settings.sagas';
import {newsApiSagas} from './newsApi.sagas';

export default function* APPsagas(){
  yield all([
    ...settings,
    ...newsApiSagas
  ]);
}
