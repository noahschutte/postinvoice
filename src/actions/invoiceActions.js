import * as types from '../constants';
import { DB_URL } from 'react-native-dotenv';
/*
* synchronous action creators
*/

export function addNewLine() {
  return {
    type: types.ADD_NEW_LINE,
  };
}

export function clearNewInvoiceData() {
  return {
    type: types.CLEAR_NEW_INVOICE_DATA,
  };
}

export function fetchingComplete() {
  return {
    type: types.FETCHING_COMPLETE,
  };
}

export function handleError(error) {
  return {
    type: types.HANDLE_ERROR,
    error,
  };
}

export function isFetching() {
  console.log('reached here though');
  return {
    type: types.IS_FETCHING,
  };
}

export function onChangeInvoiceDate(date) {
  return {
    type: types.ON_CHANGE_INVOICE_DATE,
    date,
  };
}

export function onChangeInvoiceNumber(invoiceNumber) {
  return {
    type: types.ON_CHANGE_INVOICE_NUMBER,
    invoiceNumber,
  };
}

export function onChangeItemAmount(item, amount) {
  amount = amount.slice(1);
  return {
    type: types.ON_CHANGE_ITEM_AMOUNT,
    item,
    amount,
  };
}

export function onChangeItemCode(item, code) {
  return {
    type: types.ON_CHANGE_ITEM_CODE,
    item,
    code,
  };
}

export function onChangeVendorName(vendorName) {
  return {
    type: types.ON_CHANGE_VENDOR_NAME,
    vendorName,
  };
}

export function postNewInvoiceBegin() {
  return {
    type: types.POST_NEW_INVOICE_BEGIN,
  };
}

export function postNewInvoiceComplete() {
  return {
    type: types.POST_NEW_INVOICE_COMPLETE,
  };
}

export function retrieveInvoicesBegin() {
  return {
    type: types.RETRIEVE_INVOICES_BEGIN,
  };
}

export function retrieveInvoicesComplete() {
  return {
    type: types.RETRIEVE_INVOICES_COMPLETE,
  };
}

export function temporaryAddVendor(mockInvoice) {
  return {
    type: types.TEMPORARY_ADD_VENDOR,
    mockInvoice,
  };
}

export function updateCodes(codes) {
  return {
    type: types.updateCodes,
    codes,
  };
}

export function updateInvoices(invoices) {
  return {
    type: types.UPDATE_INVOICES,
    invoices,
  };
}

export function updateVendorList(vendors) {
  return {
    type: types.UPDATE_VENDOR_LIST,
    vendors,
  };
}

/*
* asynchronous action creators
*/

export function deleteInvoice(invoiceId) {
  return function (dispatch) {
    console.log('reached', invoiceId);
    dispatch(isFetching());
    const url = `${DB_URL}/invoices/${invoiceId}`;
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(responseJSON => {
      console.log('responseJSON', responseJSON);
      dispatch(fetchingComplete());
    })
    .catch(err => alert(err));
  };
}

export function fetchInvoices() {

  return function (dispatch) {
    const url = `${DB_URL}/invoices`;
    dispatch(retrieveInvoicesBegin());

    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseJSON => {
      if (responseJSON.errorMessage) {
        alert(responseJSON.errorMessage);
      } else {
        dispatch(updateInvoices(responseJSON.invoices));
      }
    })
    .then(() => dispatch(retrieveInvoicesComplete()))
    .catch(err => alert(err));
  };
}

export function createNewInvoiceBegin() {
  const alphabetize = (array) => {
    return array;
  };
  return function (dispatch) {
    dispatch(isFetching());
    let url = `${DB_URL}/vendors`;
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseJSON => {
      const { vendors } = responseJSON;
      alphabetize(vendors);
      dispatch(updateVendorList(vendors));
    })
    .catch(error => alert(error));
    url = `${DB_URL}/codes`;
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJSON => {
      const { codes } = responseJSON;
      alphabetize(codes);
      dispatch(updateCodes(codes));
    })
    .catch(error => alert(error));
  };
}

export function postNewInvoice(newInvoice, callback) {
  return function(dispatch) {
    dispatch(postNewInvoiceBegin());
    let {
      date,
      invoiceNumber,
      vendor,
      items,
    } = newInvoice;
    date = new Date(date);
    let total = 0;
    items.forEach(item => {
      total += parseFloat(item.amount);
    });
    const body = JSON.stringify({
      date,
      supplierName: vendor,
      invoiceNumber,
      total,
      items,
    });
    fetch(`${DB_URL}/invoices`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body,
    })
    .then(response => response.ok ? callback() : response.json())
    .then(responseJSON => {
      dispatch(postNewInvoiceComplete());
      if (responseJSON.error) {
        dispatch(handleError(responseJSON.error));
      }
    })
    .catch(error => dispatch(handleError(error.errorMessage)));
  };
}
