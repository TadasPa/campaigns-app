import { combineReducers } from 'redux';
import campaignsReducer from './campaigns';

const rootReducer = combineReducers({
  campaigns: campaignsReducer,
})

export default rootReducer