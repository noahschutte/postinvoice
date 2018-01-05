import * as types from '../constants';
import { DB_URL } from 'react-native-dotenv';
import * as InventoryActions from './inventorySheetActions';
/*
* synchronous action creators
*/

export function createReportBegin() {
  return {
    type: types.CREATE_REPORT_BEGIN,
  };
}

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

export function onChangeSales(amount, salesType) {
  return {
    type: types.ON_CHANGE_SALES,
    salesType,
    amount,
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

export function createReport(reportData) {
  return function(dispatch) {
    dispatch(createReportBegin());
    function formatDate(date) {
    var d = new Date(date)    ,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
    }
    const startDateRange = formatDate(reportData.startDateRange);
    const endDateRange = formatDate(reportData.endDateRange);
    console.log('startDateRange', startDateRange);
    const body = {
      startDateRange,
      endDateRange,
      ...reportData,
    };
    console.log('body: ', body);
    fetch(`${DB_URL}/reports`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(response => {
      console.log('response', response);
      return response.json();
    })
    .then(responseJSON => {
      console.log('responseJSON: ', responseJSON);
    })
    .catch(err => alert(err));
  };
}
