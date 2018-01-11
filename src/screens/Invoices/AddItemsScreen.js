import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LineItems from '../../components/LineItems';
import NewItem from '../../components/NewItem';
import SingleButton from '../../components/SingleButton';

import {
  addItemToInvoice,
  removeItemFromInvoice,
  onChangeItemCode,
  onChangeItemAmount,
} from '../../actions/invoiceActions';

class AddItemsScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {
      codeText: '',
      amount: '',
      currentLineItem: 0,
    };
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'REVIEW',
        id: 'REVIEW',
      },
    ],
  };

  addItemToInvoice = () => {
    let item = this.props.items[this.state.currentLineItem];
    const code = this.props.codes.filter(code => code.name === item.code.id);
    console.log('item, code: ', item, code);
    if (code[0]) {
      item = {
        ...item,
        code: {
          ...code[0],
        },
      };
      const codes = this.props.items.map(item => item.code.name);
      if (item.code.name === '' || item.amount === '') return;
      if (codes.indexOf(item.code.id) >= -1) {
        alert('code already exists!');
        return;
      }
      // this.onChangeCode('');
      // this.onChangeAmount('');
      this.props.addItemToInvoice(item, this.state.currentLineItem);
    }
  }

  editItem = (item) => {
    console.log('item: ', item);
    // this.setState({ codeText: item.code.name });
    // this.setState({ amount: '$' + item.amount });
    // this.props.removeItemFromInvoice(item);
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'REVIEW') {
        this.addItemToInvoice();
        this.props.navigator.push({
          screen: 'postinvoice.ReviewInvoiceScreen',
          title: 'Review Invoice',
        });
      }
    }
  }

  onChangeAmount = (amount) => {
    this.setState({ amount });
  };

  onChangeCode = (codeText) => {
    this.setState({ codeText });
  };

  _findCode = (name) => {
    if (name === '') {
      return [];
    }

    const { codes } = this.props;
    const regex = new RegExp(`${name.trim()}`, 'i');
    return codes.filter(code => code.name.search(regex) >= 0);
  }

  render() {
    console.log('this.props.items: ', this.props.items);
    const { name } = this.props.items[this.state.currentLineItem].code;
    const codes = this._findCode(name);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={{ flex: 1 }}>
        {/* <LineItems
          editItem={this.editItem}
          items={this.props.items}
        /> */}
        {this.props.items.map(item => {
          const i = this.props.items.indexOf(item);
          return (
            <NewItem
              key={i}
              item={item}
              index={i}
              editable={() => i === this.state.currentLineItem}
              editItem={this.editItem}
              autocompleteData={codes.length === 1 && comp(name, codes[0].name) ? [] : codes.map(code => code.name)} // eslint-disable-line
              codes={this.props.codes}
              onChangeAmount={this.props.onChangeItemAmount}
              onChangeCode={this.props.onChangeItemCode}
              code={this.state.codeText}
              amount={this.state.amount}
              findCode={this._findCode}
              onSubmitEditing={this.addItemToInvoice}
            />
          );
        })}
        {/* <NewItem
          autocompleteData={codes.length === 1 && comp(codeText, codes[0].name) ? [] : codes.map(code => code.name)} // eslint-disable-line
          codes={this.props.codes}
          onChangeAmount={this.onChangeAmount}
          onChangeCode={this.onChangeCode}
          code={this.state.codeText}
          amount={this.state.amount}
          findCode={this._findCode}
          onSubmitEditing={this.addItemToInvoice}
        /> */}
        <SingleButton onPress={this.addItemToInvoice} buttonText='Add' />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { items } = invoicesReducer.newInvoice;
  const { codes } = invoicesReducer;
  return { items, codes };
};

export default connect(mapStateToProps, {
  addItemToInvoice,
  removeItemFromInvoice,
  onChangeItemCode,
  onChangeItemAmount,
})(AddItemsScreen);
