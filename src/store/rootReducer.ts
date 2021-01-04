import { combineReducers } from 'redux';
import campaignsReducer from './campaigns/reducer';

const rootReducer = combineReducers({
  campaigns: campaignsReducer,
})

export default rootReducer