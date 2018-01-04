import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

import { connect } from 'react-redux';

class InventoryRangeScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {
      dateBegin: 1,
      dateEnd: 3,
      testArray: [
        {
          id: 0,
          date: 1
        },
        {
          id: 1,
          date: 2,
        },
        {
          id: 2,
          date: 3
        }
      ]
    };
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

  render() {
    console.log('this.props, ', this.props);
    return (
      <View style={{ flex: 1 }}>
        <Text>
          Inventory Range Screen
        </Text>
        <Picker
          selectedValue={this.state.dateBegin}
          onValueChange={(itemValue, itemIndex) => this.setState({ dateBegin: itemValue })}
        >
          {
            this.state.testArray.map(obj => {
              return (
                <Picker.Item label={obj.date.toString()} key={obj.id} value={obj.date} />
              );
            })
          }
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = ({ inventorySheetsReducer }) => {
  const { inventorySheets } = inventorySheetsReducer;
  return { inventorySheets };
};

export default connect(mapStateToProps, {})(InventoryRangeScreen);
