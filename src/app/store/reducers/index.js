import {combineReducers} from 'redux';
import settings from './settings.reducer';

const createReducer = combineReducers({
  settings
});

export default createReducer;
