import { Navigation } from 'react-native-navigation';

import Invoices from './Invoices';
import SelectDateScreen from './AddInvoice/SelectDateScreen';
import SelectVendorScreen from './AddInvoice/SelectVendorScreen';
import InvoiceNumberScreen from './AddInvoice/InvoiceNumberScreen';
import CategoryBreakdownScreen from './AddInvoice/CategoryBreakdownScreen';
import AddVendorModal from './AddInvoice/AddVendorModal';
import AddItemsScreen from './AddInvoice/AddItemsScreen';
import InvoiceReviewScreen from './AddInvoice/InvoiceReviewScreen';
import SideMenu from './SideMenu';
import ViewInvoiceScreen from './ViewInvoiceScreen';
import InventorySheets from './InventorySheets/InventorySheets';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('postinvoice.Invoices', () => Invoices, store, Provider);
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
}
