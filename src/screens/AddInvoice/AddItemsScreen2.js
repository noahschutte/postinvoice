import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import LineItems from '../../components/LineItems';
import NewItem from '../../components/NewItem';

class AddItemsScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {
      codeText: '',
      amount: '',
    };
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

  onChangeAmount = (amount) => {
    this.setState({ amount });
  };

  onChangeCode = (codeText) => {
    this.setState({ codeText });
  };

  _findCode = (codeText) => {
    if (codeText === '') {
      return [];
    }

    const { codes } = this.props;
    const regex = new RegExp(`${codeText.trim()}`, 'i');
    return codes.filter(code => code.name.search(regex) >= 0);
  }

  render() {

    const { codeText } = this.state;
    const codes = this._findCode(codeText);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={{ flex: 1 }}>
        <LineItems items={this.props.items} />
        <NewItem
          autocompleteData={codes.length === 1 && comp(codeText, codes[0].name) ? [] : codes.map(code => code.name)} // eslint-disable-line
          codes={this.props.codes}
          onChangeAmount={this.onChangeAmount}
          onChangeCode={this.onChangeCode}
          code={this.state.codeText}
          amount={this.state.amount}
          findCode={this._findCode}
        />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{
            backgroundColor: '#efeffa',
            padding: 15,
            elevation: 1,
            borderRadius: 2,
          }}
          onPress={() => alert('not yet')}
          >
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { items } = invoicesReducer.newInvoice;
  const { codes } = invoicesReducer;
  console.log('items', items);
  return { items, codes };
};

export default connect(mapStateToProps, {})(AddItemsScreen);
