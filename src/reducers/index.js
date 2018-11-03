import { combineReducers } from 'redux';
import previewReducer from './previewReducer';
import sidebarReducer from './sidebarReducer';

export default combineReducers({
  previewReducer,
  sidebarReducer
});
