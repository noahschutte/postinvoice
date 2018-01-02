import * as types from '../constants';

const initialState = {
  isFetching: false,
  invoices: [],
  codes: [],
  vendors: [],
  error: '',
  newInvoice: {
    total: 0,
    date: '',
    number: '',
    vendor: {},
    items: [],
  }
};

function invoices(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.ADD_ITEM_TO_INVOICE:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          total: state.newInvoice.total + action.item.amount,
          items: [
            ...state.newInvoice.items,
            action.item
          ],
        },
      };
    case types.ADD_NEW_LINE:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          items: [
            ...state.newInvoice.items,
            {
              id: 'temporary_id',
              code: {},
              amount: '',
            },
          ]
        }
      };
    case types.ADD_VENDOR_TO_INVOICE:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          vendor: action.vendor
        },
      };
    case types.CLEAR_NEW_INVOICE_DATA:
      return {
        ...state,
        newInvoice: initialState.newInvoice,
      };
    case types.FETCHING_COMPLETE:
      return {
        ...state,
        isFetching: false,
      };
    case types.HANDLE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case types.IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case types.ON_CHANGE_INVOICE_DATE:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          date: action.date
        },
      };
    case types.ON_CHANGE_INVOICE_NUMBER:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          number: action.number,
        },
      };
    case types.ON_CHANGE_ITEM_AMOUNT: {
      let items = state.newInvoice.items.filter(item => {
        return item.code != action.item.code;
      });
      const index = state.newInvoice.items.indexOf(action.item);
      const item = {
        code: action.item.code,
        amount: action.amount,
      };
      items.splice(index, 0, item);
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          items,
        }
      };
    }
    case types.ON_CHANGE_ITEM_CODE: {
      let items = state.newInvoice.items.filter(item => {
        return item.amount != action.item.amount;
      });
      const index = state.newInvoice.items.indexOf(action.item);
      const item = {
        amount: action.item.amount,
        code: action.code,
      };
      items.splice(index, 0, item);
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          items,
        }
      };
    }
    case types.ON_CHANGE_VENDOR_NAME:
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          vendor: {
            ...state.newInvoice.vendor,
            name: action.vendorName,
          }
        },
      };
    case types.POST_NEW_INVOICE_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case types.POST_NEW_INVOICE_COMPLETE:
      return {
        ...state,
        isFetching: false,
        invoices: [
          action.invoice,
          ...state.invoices
        ]
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
        vendors: [action.newVendor, ...state.vendors],
      };
    case types.UPDATE_CODES:
      return {
        ...state,
        codes: action.codes,
      };
    case types.UPDATE_INVOICES:
    return {
      ...state,
      invoices: action.invoices,
    };
    case types.UPDATE_VENDOR_LIST:
      return {
        ...state,
        vendors: action.vendors,
      };
    default:
      return state;
  }
}

export default invoices;
