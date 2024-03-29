import * as types from '../constants';
import { DB_URL } from 'react-native-dotenv';

/*
* synchronous action creators
*/

export function postInventorySheetBegin() {
  return {
    type: types.CREATE_INVENTORY_SHEET_BEGIN
  };
}

export function postInventorySheetComplete(inventorySheet) {
  return {
    type: types.CREATE_INVENTORY_SHEET_COMPLETE,
    inventorySheet,
  };
}

export function deleteInventorySheetBegin() {
  return {
    type: types.DELETE_INVENTORY_SHEET_BEGIN,
  };
}
export function deleteInventorySheetConfirmed(inventorySheetId) {
  return {
    type: types.DELETE_INVENTORY_SHEET,
    inventorySheetId,
  };
}

export function fetchInventorySheetsBegin() {
  return {
    type: types.FETCH_INVENTORY_SHEETS_BEGIN,
  };
}

export function fetchInventorySheetsComplete(inventorySheets) {
  return {
    type: types.FETCH_INVENTORY_SHEETS_COMPLETE,
    inventorySheets,
  };
}

export function onChangeInventoryAmount(amount, inventoryType) {
  return {
    type: types.ON_CHANGE_INVENTORY_AMOUNT,
    inventoryType,
    amount,
  };
}


/*
* asynchronous action creators
*/

export function postInventorySheet(inventoryData, callback) {
  return function(dispatch) {
    dispatch(postInventorySheetBegin());
    const { date, beerAmount, foodAmount, wineAmount } = inventoryData;
    function formatDate(date) {
    var d = new Date(date)    ,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
    }
    const dateString = formatDate(date);
    const body = {
      date: dateString,
      beerTotal: parseFloat(beerAmount.slice(1).replace(',','')),
      foodTotal: parseFloat(foodAmount.slice(1).replace(',','')),
      wineTotal: parseFloat(wineAmount.slice(1).replace(',','')),
    };
    fetch(`${DB_URL}/inventory_sheets`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(responseJSON => {
      if (responseJSON.inventorySheetId) {
        dispatch(postInventorySheetComplete({
          id: responseJSON.inventorySheetId,
          ...body,
        }));
        callback();
      }
    })
    .catch(err => alert(err));
  };
}

export function deleteInventorySheet(inventorySheetId) {
  return function(dispatch) {
    dispatch(deleteInventorySheetBegin());
    fetch(`${DB_URL}/inventory_sheets/${inventorySheetId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(responseJSON => {
      if (responseJSON.message) {
        dispatch(deleteInventorySheetConfirmed(inventorySheetId));
      }
    })
    .catch(err => alert(err));
  };
}

export function fetchInventorySheets() {
  return function(dispatch) {
    dispatch(fetchInventorySheetsBegin());
    fetch(`${DB_URL}/inventory_sheets`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJSON => {
      dispatch(fetchInventorySheetsComplete(responseJSON.inventorySheets));
    })
    .catch(err => alert(err));
  };
}
