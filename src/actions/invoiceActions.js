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

export function updateInvoices(invoices) {
  return {
    type: types.UPDATE_INVOICES,
    invoices,
  };
}

/*
* asynchronous action creators
*/

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
