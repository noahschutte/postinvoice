import * as types from '../constants';

const initialState = {
  isFetching: false,
  startingInventorySheet: '',
  endingInventorySheet: '',
  invoiceStartDate: '',
  invoiceEndDate: '',
  beerSales: '',
  foodSales: '',
  wineSales: '',
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
    case types.CREATE_REPORT_BEGIN:
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
    case types.ON_CHANGE_INVOICE_DATE_RANGE:
      return {
        ...state,
        invoiceStartDate: action.startDateRange,
        invoiceEndDate: action.endDateRange,
      };
    case types.ON_CHANGE_SALES:
      switch (action.salesType) {
        case 'Beer':
          return {
            ...state,
            beerSales: action.amount,
          };
        case 'Food':
          return {
            ...state,
            foodSales: action.amount,
          };
        case 'Wine':
          return {
            ...state,
            wineSales: action.amount,
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

export default reports;
