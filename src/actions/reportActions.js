import * as types from '../constants';
import { DB_URL } from 'react-native-dotenv';
import * as InventoryActions from './inventorySheetActions';

/*
* synchronous action creators
*/

export function onChangeEndingInventorySheet(endingInventorySheet) {
  return {
    type: types.ON_CHANGE_ENDING_INVENTORY_SHEET,
    endingInventorySheet,
  };
}

export function onChangeInvoiceDateRange(startDateRange, endDateRange) {
  return {
    type: types.ON_CHANGE_INVOICE_DATE_RANGE,
    startDateRange,
    endDateRange,
  };
}


export function onChangeStartingInventorySheet(startingInventorySheet) {
  return {
    type: types.ON_CHANGE_STARTING_INVENTORY_SHEET,
    startingInventorySheet,
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
