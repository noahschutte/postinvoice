import * as types from '../constants';
import { DB_URL } from 'react-native-dotenv';

/*
* synchronous action creators
*/

export function createInventorySheetBegin() {
  return {
    type: types.CREATE_INVENTORY_SHEET_BEGIN
  };
}

export function createInventorySheetComplete(inventorySheetId) {
  return {
    type: types.CREATE_INVENTORY_SHEET_COMPLETE,
    inventorySheetId,
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

export function createInventorySheet(inventoryData) {
  return function(dispatch) {
    dispatch(createInventorySheetBegin());
    const { date, beerAmount, foodAmount, wineAmount } = inventoryData;
    const body = JSON.stringify({
      date,
      beerTotal: parseFloat(beerAmount.slice(1).replace(',','')),
      foodTotal: parseFloat(foodAmount.slice(1).replace(',','')),
      wineTotal: parseFloat(wineAmount.slice(1).replace(',','')),
    });
    fetch(`${DB_URL}/inventory_sheets`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body,
    })
    .then(response => response.json())
    .then(responseJSON => {
      createInventorySheetComplete(responseJSON.inventorySheetId);
    })
    .catch(err => alert(err));
  };
}
