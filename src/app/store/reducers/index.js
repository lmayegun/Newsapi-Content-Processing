import {combineReducers} from 'redux';
import settings from './settings.reducer';
import newsApi from './newsApi/contents.reducers';
import firebase from './firebase/contents.reducers';
import searchFilter from './forms/searchFilter.reducers';

const createReducer = combineReducers({
  settings,
  newsApi,
  firebase,
  searchFilter
});

export default createReducer;
