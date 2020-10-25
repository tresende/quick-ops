import { combineReducers } from 'redux';
import timelineReducer from './timeline';
import loadingReducer from './loading';

export default combineReducers({
    timelineReducer,
    loadingReducer,
});
