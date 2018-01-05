import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

import { connect } from 'react-redux';

import SingleButton from '../../components/SingleButton';
import {
  onChangeEndingInventorySheet,
  onChangeStartingInventorySheet
} from '../../actions/reportActions';

class InventoryRangeScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
        this.props.navigator.pop({
          animated: true,
          animationType: 'slide-horizontal',
        });
      }
    }
  }

  onConfirm = () => {
    this.props.navigator.push({
      screen: this.props.intent,
      title: this.props.intentTitle, 
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 26, marginVertical: 20, }}>
            Date range start:
          </Text>
          <Picker
            selectedValue={this.props.startingInventorySheet}
            onValueChange={itemValue => this.props.onChangeStartingInventorySheet(itemValue)}
          >
            {
              this.props.inventorySheets.map(sheet => {
                let date = sheet.date;
                date = date.substring(5,7) + '/' + date.substring(8) + '/' + date.substring(0,4);
                return (
                  <Picker.Item label={date} key={sheet.id} value={sheet.id} />
                );
              })
            }
          </Picker>
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 26, marginVertical: 20, }}>
            Date range end:
          </Text>
          <Picker
            selectedValue={this.props.endingInventorySheet}
            onValueChange={itemValue => this.props.onChangeEndingInventorySheet(itemValue)}
          >
            {
              this.props.inventorySheets.map(sheet => {
                let date = sheet.date;
                date = date.substring(5,7) + '/' + date.substring(8) + '/' + date.substring(0,4);
                return (
                  <Picker.Item label={date} key={sheet.id} value={sheet.id} />
                );
              })
            }
          </Picker>
        </View>
        <SingleButton
          onPress={this.onConfirm}
          buttonText='Confirm'
        />
      </View>
    );
  }
}

const mapStateToProps = ({ inventorySheetsReducer, reportsReducer }) => {
  const { inventorySheets } = inventorySheetsReducer;
  const { startingInventorySheet, endingInventorySheet } = reportsReducer;
  return { inventorySheets, startingInventorySheet, endingInventorySheet };
};

export default connect(mapStateToProps, {
  onChangeEndingInventorySheet,
  onChangeStartingInventorySheet,
})(InventoryRangeScreen);
