import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LineItems from '../../components/LineItems';
import NewItem from '../../components/NewItem';

class AddItemsScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'ADD',
        id: 'ADD',
      },
    ],
  };

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'ADD') {
        alert('works!');
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LineItems items={this.props.items} />
        <NewItem />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { items } = invoicesReducer.newInvoice;
  return { items };
};

export default connect(mapStateToProps, {})(AddItemsScreen);
