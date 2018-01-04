import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

class SideMenu extends Component <{}> {

  onPress = (destination) => {
    let route = '';

    switch (destination) {
      case 'Inventory Sheets':
        route = 'InventorySheets';
        break;
      case 'Invoices':
        route = 'InvoicesHome';
        break;
      case 'Reports':
        route = 'ReportsScreen';
        break;
      default:
        route = destination;
        break;
    }

    this.props.navigator.resetTo({
      screen: `postinvoice.${route}`,
      title: destination,
      navigatorButtons: {
        leftButtons: [
          {
            title: 'sideMenu',
            id: 'sideMenu',
          }
        ],
        rightButtons: [
          {
            title: 'Add',
            id: 'add',
          },
        ]
      }
    });
    this.props.navigator.toggleDrawer({
      side: 'left',
      to: 'closed',
      animated: true
    });
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.menuHeader}>
          <Text style={styles.menuTextStyle}>Postinvoice</Text>
        </View>
        <View style={styles.menuOptionsContainer}>

          <TouchableOpacity
            onPress={() => this.onPress('Invoices')}
            style={styles.menuOptionWrapper}
          >
            <Text style={styles.menuOptionTextStyle}>Invoices</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onPress('Inventory Sheets')}
            style={styles.menuOptionWrapper}
          >
            <Text style={styles.menuOptionTextStyle}>Inventory Sheets</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onPress('Reports')}
            style={styles.menuOptionWrapper}
          >
            <Text style={styles.menuOptionTextStyle}>Reports</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    width: Dimensions.get('window').width * 0.66,
    height: Dimensions.get('window').height,
    backgroundColor: '#ddd',
  },
  menuHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    flex: 1,
  },
  menuTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  menuOptionsContainer: {
    margin: 20,
    flex: 9,
  },
  menuOptionWrapper: {
    marginBottom: 25,
    alignItems: 'center',
  },
  menuOptionTextStyle: {
    fontSize: 24,
  }
};


export default SideMenu;
