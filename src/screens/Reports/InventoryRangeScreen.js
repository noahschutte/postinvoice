import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

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

  render() {
    console.log('this.props, ', this.props);
    return (
      <View style={{ flex: 1 }}>
        <Text>
          Inventory Range Screen
        </Text>
        {/* <Picker

        >
          <Picker.Item />
        </Picker> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, {})(InventoryRangeScreen);
