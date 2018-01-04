/* eslint-disable */
import { Navigation } from 'react-native-navigation';

import AddItemsScreen from './Invoices/AddItemsScreen';
import AddVendorModal from './Invoices/AddVendorModal';
import CategoryBreakdownScreen from './Invoices/CategoryBreakdownScreen';
import InputInventoryScreen from './InventorySheets/InputInventoryScreen';
import InventorySheets from './InventorySheets/InventorySheets';
import InvoiceNumberScreen from './Invoices/InvoiceNumberScreen';
import InvoiceReviewScreen from './Invoices/InvoiceReviewScreen';
import InvoicesHome from './Invoices/InvoicesHome';
import ReportsScreen from './Reports/ReportsScreen';
import SelectDateScreen from './Invoices/SelectDateScreen';
import SelectVendorScreen from './Invoices/SelectVendorScreen';
import SideMenu from './SideMenu';
import ViewInvoiceScreen from './Invoices/ViewInvoiceScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('postinvoice.AddItemsScreen', () => AddItemsScreen, store, Provider);
  Navigation.registerComponent('postinvoice.AddVendorModal', () => AddVendorModal, store, Provider);
  Navigation.registerComponent('postinvoice.CategoryBreakdownScreen', () => CategoryBreakdownScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InputInventoryScreen', () => InputInventoryScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InventorySheets', () => InventorySheets, store, Provider);
  Navigation.registerComponent('postinvoice.InvoiceNumberScreen', () => InvoiceNumberScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InvoiceReviewScreen', () => InvoiceReviewScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InvoicesHome', () => InvoicesHome, store, Provider);
  Navigation.registerComponent('postinvoice.ReportsScreen', () => ReportsScreen, store, Provider);
  Navigation.registerComponent('postinvoice.SelectDateScreen', () => SelectDateScreen, store, Provider);
  Navigation.registerComponent('postinvoice.SelectVendorScreen', () => SelectVendorScreen, store, Provider);
  Navigation.registerComponent('postinvoice.SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('postinvoice.ViewInvoiceScreen', () => ViewInvoiceScreen, store, Provider);
}
