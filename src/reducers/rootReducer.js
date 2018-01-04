import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';
import inventorySheetsReducer from './inventorySheetsReducer';
import reportsReducer from './reportsReducer';

const rootReducer = combineReducers({
  invoicesReducer,
  inventorySheetsReducer,
  reportsReducer,
});

export default rootReducer;
