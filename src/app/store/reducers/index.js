import {combineReducers} from 'redux';
import settings from './settings.reducer';
import newsApi from './newsApi/contents.reducers';

const createReducer = combineReducers({
  settings,
  newsApi
});

export default createReducer;
