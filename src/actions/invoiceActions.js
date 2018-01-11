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

export function addItemToInvoice(item, index) {
  return {
    type: types.ADD_ITEM_TO_INVOICE,
    item,
    index,
  };
}

export function addVendorToInvoice(vendor) {
  return {
    type: types.ADD_VENDOR_TO_INVOICE,
    vendor,
  };
}

export function clearNewInvoiceData() {
  return {
    type: types.CLEAR_NEW_INVOICE_DATA,
  };
}

export function deleteInvoiceComplete(invoiceId) {
  return {
    type: types.DELETE_INVOICE_COMPLETE,
    invoiceId,
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
  return {
    type: types.IS_FETCHING,
  };
}

export function onChangeDate(date, [period, week]) {
  console.log('date, period, week', date, period, week);
  return {
    type: types.ON_CHANGE_DATE,
    date,
    period,
    week,
  };
}

export function onChangeInvoiceNumber(number) {
  return {
    type: types.ON_CHANGE_INVOICE_NUMBER,
    number,
  };
}

export function onChangeItemAmount(item, index, amount) {
  return {
    type: types.ON_CHANGE_ITEM_AMOUNT,
    item,
    index,
    amount,
  };
}

export function onChangeItemCode(item, index, codeName) {
  return {
    type: types.ON_CHANGE_ITEM_CODE,
    item,
    index,
    codeName,
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

export function postNewInvoiceComplete(invoice) {
  return {
    type: types.POST_NEW_INVOICE_COMPLETE,
    invoice,
  };
}

export function removeItemFromInvoice(item) {
  return {
    type: types.REMOVE_ITEM_FROM_INVOICE,
    item,
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

export function temporaryAddVendor(newVendor) {
  return {
    type: types.TEMPORARY_ADD_VENDOR,
    newVendor,
  };
}

export function updateCodes(codes) {
  return {
    type: types.UPDATE_CODES,
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

export function deleteInvoice(invoiceId, callback) {
  return function (dispatch) {
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
      if (responseJSON.error) {
        dispatch(handleError(responseJSON.error));
      } else {
        dispatch(deleteInvoiceComplete(invoiceId));
        callback();
      }
    })
    .catch(err => handleError(err));
  };
}


export function fetchInvoices() {

  // function serializeAndPrintEntries(obj) {
  //   const r = Object.entries(obj);
  //   r.map(entry => {
  //     console.log('key: ', entry[0]);
  //     console.log('type: ', typeof entry[1]);
  //     console.log('value: ', entry[1]);
  //     console.log('----------------------------');
  //     if (typeof entry[1] === 'object' && entry[1] !== null) {
  //       serializeAndPrintEntries(entry[1]);
  //     }
  //   });
  // }
  return function (dispatch) {
    let url = `${DB_URL}/invoices`;
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
        // serializeAndPrintEntries(responseJSON);
        dispatch(updateInvoices(responseJSON.invoices));
      }
    })
    .then(() => dispatch(retrieveInvoicesComplete()))
    .catch(err => handleError(err));
    url = `${DB_URL}/codes`;
    const alphabetize = (array) => {
      function compare(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
        }
      array.sort(compare);
      return array;
    };
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
    .then(() => fetchingComplete())
    .catch(error => handleError(error));
  };
}

export function createNewInvoiceBegin() {
  const alphabetize = (array) => {
    function compare(a,b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
      }
    array.sort(compare);
    return array;
  };
  return function (dispatch) {
    dispatch(clearNewInvoiceData());
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
  };
}

export function postNewInvoice(newInvoice, callback) {
  return function(dispatch) {
    dispatch(postNewInvoiceBegin());
    let {
      date,
      number,
      vendor,
      items,
      total,
    } = newInvoice;

    // Format date for backend

    function formatDate(date) {
    var d = new Date(date)    ,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
    }

    date = formatDate(date);

    // format vendor for backend

    vendor = {
      id: vendor.id,
      name: vendor.name,
      isNew: vendor.isNew || false,
    };

    // format items for backend
    console.log('items: ', items);
    items.forEach(item => {
      item.amount = parseFloat(item.amount.split(',').join('')).toFixed(2);
    });

    // format total for backend
    total = parseFloat(total).toFixed(2);

    const body = JSON.stringify({
      date,
      vendor,
      number,
      total,
      items,
    });

    console.log('body: ');
    console.log(body);

    fetch(`${DB_URL}/invoices`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body,
    })
    .then(response => {
      return response.json();
    })
    .then(responseJSON => {
      if (responseJSON.invoiceId) {
        newInvoice = {
          ...newInvoice,
          id: responseJSON.invoiceId,
        };
        dispatch(postNewInvoiceComplete(newInvoice));
        callback();
      }
      if (responseJSON.error) {
        dispatch(handleError(responseJSON.error));
      }
    })
    .catch(error => dispatch(handleError(error.errorMessage)));
  };
}
