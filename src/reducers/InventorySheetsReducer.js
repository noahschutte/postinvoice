import * as types from '../constants';

const initialState = {
  date : '',
};

function InventorySheets(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.ON_CHANGE_DATE:
      return {
        ...state,
        date: action.date,
      };
    default:
      return {
        ...state,
      };
  }
}

export default InventorySheets;
