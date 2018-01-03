import { Navigation } from 'react-native-navigation';

import InvoicesHome from './Invoices/InvoicesHome';
import SelectDateScreen from './Invoices/SelectDateScreen';
import SelectVendorScreen from './Invoices/SelectVendorScreen';
import InvoiceNumberScreen from './Invoices/InvoiceNumberScreen';
import CategoryBreakdownScreen from './Invoices/CategoryBreakdownScreen';
import AddVendorModal from './Invoices/AddVendorModal';
import AddItemsScreen from './Invoices/AddItemsScreen';
import InvoiceReviewScreen from './Invoices/InvoiceReviewScreen';
import SideMenu from './SideMenu';
import ViewInvoiceScreen from './Invoices/ViewInvoiceScreen';
import InventorySheets from './InventorySheets/InventorySheets';
import ReportsScreen from './Reports/ReportsScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('postinvoice.InvoicesHome', () => InvoicesHome, store, Provider);
  Navigation.registerComponent('postinvoice.SelectDateScreen', () => SelectDateScreen, store, Provider); //eslint-disable-line
  Navigation.registerComponent('postinvoice.SelectVendorScreen', () => SelectVendorScreen, store, Provider); //eslint-disable-line
  Navigation.registerComponent('postinvoice.InvoiceNumberScreen', () => InvoiceNumberScreen, store, Provider); //eslint-disable-line
  Navigation.registerComponent('postinvoice.CategoryBreakdownScreen', () => CategoryBreakdownScreen, store, Provider); //eslint-disable-line
  Navigation.registerComponent('postinvoice.AddVendorModal', () => AddVendorModal, store, Provider);
  Navigation.registerComponent('postinvoice.AddItemsScreen', () => AddItemsScreen, store, Provider);
  Navigation.registerComponent('postinvoice.InvoiceReviewScreen', () => InvoiceReviewScreen, store, Provider); //eslint-disable-line
  Navigation.registerComponent('postinvoice.SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('postinvoice.ViewInvoiceScreen', () => ViewInvoiceScreen, store, Provider); //eslint-disable-line
  Navigation.registerComponent('postinvoice.InventorySheets', () => InventorySheets, store, Provider); //eslint-disable-line
  Navigation.registerComponent('postinvoice.ReportsScreen', () => ReportsScreen, store, Provider);
}
