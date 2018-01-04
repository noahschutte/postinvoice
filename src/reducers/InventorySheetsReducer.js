import * as types from '../constants';

const initialState = {
  inventorySheets: [],
  isFetching: false,
  date : '',
  wineAmount: '',
  beerAmount: '',
  foodAmount: '',
};

function inventorySheets(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.CREATE_INVENTORY_SHEET_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case types.CREATE_INVENTORY_SHEET_COMPLETE:
      return {
        ...state,
        isFetching: false,
      };
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
