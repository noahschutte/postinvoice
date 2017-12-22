import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';

const rootReducer = combineReducers({
  invoicesReducer,
});

export default rootReducer;
