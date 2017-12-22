import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './src/screens';
import configureStore from './src/store/configureStore';

const store = configureStore();
registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'postinvoice.HomeScreen',
    title: 'Postinvoice',
    navigatorStyle: {
      navBarTitleTextCentered: true,
    },
    navigatorButtons: {
      rightButtons: [
        {
          title: 'Add',
          id: 'add',
        }
      ],
      leftButtons: [
        {
          title: 'sideMenu',
          id: 'sideMenu'
        }
      ],
    },
  },
});
