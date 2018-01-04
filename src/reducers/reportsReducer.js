import * as types from '../constants';

const initialState = {
  isFetching: false,
  startingInventorySheet: '',
  endingInventorySheet: '',
  reports: [],
};

function reports(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.FETCHING_COMPLETE:
      return {
        ...state,
        isFetching: false,
      };
    case types.IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case types.ON_CHANGE_ENDING_INVENTORY_SHEET:
      return {
        ...state,
        endingInventorySheet: action.endingInventorySheet,
      };
    case types.ON_CHANGE_STARTING_INVENTORY_SHEET:
      return {
        ...state,
        startingInventorySheet: action.startingInventorySheet,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reports;
