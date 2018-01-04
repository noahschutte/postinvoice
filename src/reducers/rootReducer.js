import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';
import InventorySheetsReducer from './InventorySheetsReducer';

const rootReducer = combineReducers({
  invoicesReducer,
  InventorySheetsReducer,
});

export default rootReducer;
