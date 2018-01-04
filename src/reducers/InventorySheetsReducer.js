import * as types from '../constants';

const initialState = {
  date : '',
  wineAmount: '',
  beerAmount: '',
  foodAmount: '',
};

function inventorySheets(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.ON_CHANGE_DATE:
      return {
        ...state,
        date: action.date,
      };
    case types.ON_CHANGE_INVENTORY_AMOUNT:
      switch (action.inventoryType) {
        case 'Wine':
          return {
            ...state,
            wineAmount: action.amount
          };
        case 'Beer':
          return {
            ...state,
            beerAmount: action.amount,
          };
        case 'Food':
          return {
            ...state,
            foodAmount: action.amount,
          };
        default:
          return {
            ...state,
          };
      }
    default:
      return {
        ...state,
      };
  }
}

export default inventorySheets;
