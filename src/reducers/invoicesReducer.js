import * as types from '../constants';

const initialState = {
  isFetching: false,
  invoices: [],
  newInvoice: {
    date: '',
    vendor: '',
  }
};

function invoices(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.ON_CHANGE_VENDOR_NAME:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          vendor: action.vendorName,
        },
      };
    case types.RETRIEVE_INVOICES_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case types.RETRIEVE_INVOICES_COMPLETE:
      return {
        ...state,
        isFetching: false,
      };
    case types.TEMPORARY_ADD_VENDOR:
      return {
        ...state,
        invoices: [action.mockInvoice, ...state.invoices],
      };
    case types.UPDATE_INVOICES:
    return {
      ...state,
      invoices: action.invoices,
    };
    default:
      return state;
  }
}

export default invoices;
