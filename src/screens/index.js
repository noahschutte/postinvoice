/* eslint-disable */
import { Navigation } from 'react-native-navigation';

import AddItemsScreen from './Invoices/AddItemsScreen';
import AddVendorModal from './Invoices/AddVendorModal';
import CategorySalesScreen from './Reports/CategorySalesScreen';
import InputInventoryScreen from './InventorySheets/InputInventoryScreen';
import InventoryRangeScreen from './Reports/InventoryRangeScreen';
import InventorySheets from './InventorySheets/InventorySheets';
import InvoiceDateRangeScreen from './Reports/InvoiceDateRangeScreen';
import InvoiceNumberScreen from './Invoices/InvoiceNumberScreen';
import ReviewInvoiceScreen from './Invoices/ReviewInvoiceScreen';
import InvoicesHome from './Invoices/InvoicesHome';
import ReportsScreen from './Reports/ReportsScreen';
import ReviewInventoryScreen from './InventorySheets/ReviewInventoryScreen';
import SelectDateScreen from './Invoices/SelectDateScreen';
import SelectVendorScreen from './Invoices/SelectVendorScreen';
import SideMenu from './SideMenu';
import ViewInventorySheetScreen from './InventorySheets/ViewInventorySheetScreen';
import ViewInvoiceScreen from './Invoices/ViewInvoiceScreen';
import ViewReportScreen from './Reports/ViewReportScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('postinvoice.AddItemsScreen', () => AddItemsScreen, store, Provider);
  Navigation.registerComponent('postinvoice.AddVendorModal', () => AddVendorModal, store, Provider);
  Navigation.registerComponent('postinvoice.CategorySalesScreen', () => CategorySalesScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InputInventoryScreen', () => InputInventoryScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InventoryRangeScreen', () => InventoryRangeScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InventorySheets', () => InventorySheets, store, Provider);
  Navigation.registerComponent('postinvoice.InvoiceDateRangeScreen', () => InvoiceDateRangeScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InvoiceNumberScreen', () => InvoiceNumberScreen, store, Provider);
  Navigation.registerComponent('postinvoice.ReviewInvoiceScreen', () => ReviewInvoiceScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InvoicesHome', () => InvoicesHome, store, Provider);
  Navigation.registerComponent('postinvoice.ReportsScreen', () => ReportsScreen, store, Provider);
  Navigation.registerComponent('postinvoice.ReviewInventoryScreen', () => ReviewInventoryScreen, store, Provider)
  Navigation.registerComponent('postinvoice.SelectDateScreen', () => SelectDateScreen, store, Provider);
  Navigation.registerComponent('postinvoice.SelectVendorScreen', () => SelectVendorScreen, store, Provider);
  Navigation.registerComponent('postinvoice.SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('postinvoice.ViewInventorySheetScreen', () => ViewInventorySheetScreen, store, Provider);
  Navigation.registerComponent('postinvoice.ViewInvoiceScreen', () => ViewInvoiceScreen, store, Provider);
  Navigation.registerComponent('postinvoice.ViewReportScreen', () => ViewReportScreen, store, Provider);
}
