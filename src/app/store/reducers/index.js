import {combineReducers} from 'redux';
import settings from './settings.reducer';
import newsApi from './newsApi/contents.reducers';
import firebase from './firebase/contents.reducers';
import drupal8 from './drupal8/contents.reducers';
import searchFilter from './forms/searchFilter.reducers';
import navigation from './settings/navigation.reducers';

const createReducer = combineReducers({
  settings,
  newsApi,
  firebase,
  drupal8,
  searchFilter,
  navigation
});

export default createReducer;
