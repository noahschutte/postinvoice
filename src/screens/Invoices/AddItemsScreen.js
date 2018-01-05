import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LineItems from '../../components/LineItems';
import NewItem from '../../components/NewItem';
import SingleButton from '../../components/SingleButton';

import { addItemToInvoice } from '../../actions/invoiceActions';

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
        title: 'REVIEW',
        id: 'REVIEW',
      },
    ],
  };

  addItemToInvoice = () => {
    const code = this.props.codes.filter(code => code.name === this.state.codeText);
    if (code[0]) {
      const item = {
        code: {
          id: code[0].id,
          name: this.state.codeText,
        },
        amount: parseFloat(this.state.amount.slice(1)),
      };
      const codes = this.props.items.map(item => item.code.name);
      if (item.code.name === '' || item.amount === '') return;
      if (codes.indexOf(item.code.name) !== -1) {
        alert('code already exists!');
        return;
      }
      this.onChangeCode('');
      this.onChangeAmount('');
      this.props.addItemToInvoice(item);
    }
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'REVIEW') {
        this.addItemToInvoice();
        this.props.navigator.push({
          screen: 'postinvoice.InvoiceReviewScreen',
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

export default connect(mapStateToProps, { addItemToInvoice })(AddItemsScreen);
