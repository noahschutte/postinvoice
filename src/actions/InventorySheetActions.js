import * as types from '../constants';
// import { DB_URL } from 'react-native-dotenv';

/*
* synchronous action creators
*/

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
