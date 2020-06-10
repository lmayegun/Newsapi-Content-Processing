import { put, takeLatest } from 'redux-saga/effects';

function* sampleSetting(){
  try{
    yield put({type:'SAMPLE_SUCCESS'});
  }catch(e){
    yield
  }
}

export const settings = [
  takeLatest('SAMPLE', sampleSetting),
]
