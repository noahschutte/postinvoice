import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';
import inventorySheetsReducer from './inventorySheetsReducer';

const rootReducer = combineReducers({
  invoicesReducer,
  inventorySheetsReducer,
});

export default rootReducer;
