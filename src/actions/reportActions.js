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

export function fetchReportsBegin() {
  return {
    type: types.FETCH_REPORTS_BEGIN,
  };
}

export function fetchReportsComplete(reports) {
  return {
    type: types.FETCH_REPORTS_COMPLETE,
    reports,
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

export function showInventorySheetBegin() {
  return {
    type: types.SHOW_INVENTORY_SHEET_BEGIN,
  };
}

export function showInventorySheetComplete() {
  return {
    type: types.SHOW_INVENTORY_SHEET_COMPLETE,
  };
}

export function showReportBegin() {
  return {
    type: types.SHOW_REPORT_BEGIN,
  };
}

export function showReportComplete() {
  return {
    type: types.SHOW_REPORT_COMPLETE,

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

export function createReport(reportData, callback) {
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
    const s = formatDate(reportData.startDateRange);
    const e = formatDate(reportData.endDateRange);
    const body = {
      ...reportData,
      startDateRange: s,
      endDateRange: e,
    };
    fetch(`${DB_URL}/reports`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(response => {
      return response.json();
    })
    .then(responseJSON => {
      console.log('responseJSON: ', responseJSON);
      callback(responseJSON.report);
    })
    .catch(err => alert(err));
  };
}

export function fetchReports() {
  return function(dispatch) {
    dispatch(fetchReportsBegin());
    fetch(`${DB_URL}/reports`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJSON => {
      dispatch(fetchReportsComplete(responseJSON.reports));
    })
    .catch(err => alert(err));
  };
}

export function showInventorySheet(sheetId, callback) {
  return function(dispatch) {
    dispatch(showInventorySheetBegin());
    fetch(`${DB_URL}/inventory_sheets/${sheetId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJSON => {
      dispatch(showInventorySheetComplete());
      callback(responseJSON.inventorySheet);
    })
    .catch(err => alert(err));
  };
}

export function showReport(reportId, callback) {
  return function(dispatch) {
    dispatch(showReportBegin());
    fetch(`${DB_URL}/reports/${reportId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJSON => {
      console.log('responseJSON: ', responseJSON);
      callback(responseJSON.report);
    })
    .catch(err => alert(err));
  };
}
