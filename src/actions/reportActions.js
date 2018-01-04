import * as types from '../constants';
import { DB_URL } from 'react-native-dotenv';
import * as InventoryActions from './inventorySheetActions';

/*
* synchronous action creators
*/

export function onChangeReportEndDate(reportEndDate) {
  return {
    type: types.ON_CHANGE_REPORT_END_DATE,
    reportEndDate,
  };
}


export function onChangeReportStartDate(reportStartDate) {
  return {
    type: types.ON_CHANGE_REPORT_START_DATE,
    reportStartDate,
  };
}
/*
* asynchronous action creators
*/

export function createNewReportBegin() {
  return function(dispatch) {
    dispatch(InventoryActions.fetchInventorySheetsBegin());
    fetch(`${DB_URL}/inventory_sheets`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJSON => {
      dispatch(InventoryActions.fetchInventorySheetsComplete(responseJSON.inventorySheets));
    })
    .catch(err => alert(err));
  };
}
