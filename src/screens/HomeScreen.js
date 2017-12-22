import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DB_URL } from 'react-native-dotenv';
import { connect } from 'react-redux';

import { fetchInvoices } from '../actions/invoiceActions';

class HomeScreen extends Component <{}> {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'sideMenu') {
        console.log('menu button pressed');
      }
      if (event.id == 'add') {
        this.props.navigator.push({
          screen: 'postinvoice.SelectDateScreen',
          title: 'Select Date',
          navigatorStyle: {
            navBarTitleTextCentered: true,
          },
          navigatorButtons: {
            leftButtons: [
              {
                title: 'cancel',
                id: 'cancel',
              }
            ]
          }
        });
      }
    }
  }

  onPress() {
    console.log('DB_URL: ', DB_URL);
    const route = this.children.props.children;
    console.log('route: ', route);
    switch (route) {
      case 'index': {
        const url = `${DB_URL}/invoices`;
        fetch(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'GET',
        })
        .then(response => response.json())
        .then(responseJSON => {
          if (responseJSON.errorMessage) {
            alert(responseJSON.errorMessage);
          } else {
            console.log('responseJSON: ', responseJSON);
          }
        })
        .catch(err => alert(err));
      }
        break;
      case 'show':
        fetch(`${DB_URL}/invoices/${1}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(responseJSON => {
          if (responseJSON.errorMessage) {
            alert(responseJSON.errorMessage);
          } else {
            console.log('responseJSON: ', responseJSON);
          }
        })
        .catch(error => console.error(error));
        break;
      case 'delete':
        fetch(`${DB_URL}/invoices/${1}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'DELETE',
        })
        .then(response => response.json())
        .then(responseJSON => {
          if (responseJSON.errorMessage) {
            alert(responseJSON.errorMessage);
          } else {
            console.log('responseJSON: ', responseJSON);
          }
        })
        .catch(err => alert(err));
        break;
      case 'create': {
        const date = new Date();
        const supplierName = 'Company Z';
        const invoiceNumber = '5555';
        const total = 40.00;
        const items = [
          {
            code: 'Cheese',
            amount: 20.00
          },
          {
            code: 'Glasses',
            amount: 20.00
          }
        ];
        fetch(`${DB_URL}/invoices`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            date,
            supplierName,
            invoiceNumber,
            total,
            items,
          })
        })
        .then(response => response.json())
        .then(responseJSON => {
          if (responseJSON.errorMessage) {
            alert(responseJSON.errorMessage);
          } else {
            console.log('responseJSON: ', responseJSON);
          }
        })
        .catch(error => console.error(error));
        break;
      }
    }
  }



  render() {
    console.log('this.props', this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', }}>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            index
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            show
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.fetchInvoices} style={styles.button} >
          <Text>
            test
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#be4',
    margin: 25,
    padding: 25,
  },
};

const mapStateToProps = ({ invoicesReducer }) => {
  return { invoicesReducer };
};

export default connect(mapStateToProps, { fetchInvoices })(HomeScreen);
