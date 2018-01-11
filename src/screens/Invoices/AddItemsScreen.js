import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

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
      emptyItem: {
        amount: '',
        code: {
          name: ''
        }
      },
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
    const index = this.state.currentLineItem;
    let item = this.props.items[index];
    const code = this.props.codes.filter(code => code.name === item.code.name);

    if (this.state.currentLineItem !== this.props.items.length -1) return;

    if (code[0]) {
      item = {
        ...item,
        code: {
          ...code[0],
        },
      };
      const codes = [...this.props.items.map(item => item.code.id)];
      if (item.code.name === '' || item.amount === '') return;
      const i = codes.indexOf(item.code.id);
      if (i !== index && i !== -1) {
        alert('code already exists!');
        return;
      }
      this.props.addItemToInvoice(item, this.state.currentLineItem);
      this.toggleCurrentItem(index + 1);
    }

  }

  toggleCurrentItem = (newItemIndex) => {
    this.setState({ currentLineItem: newItemIndex });
  }

  editItem = (index) => {
    this.setState({ currentLineItem: index });
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

  _findCode = (name) => {
    if (name === '') {
      return [];
    }

    const { codes } = this.props;
    const regex = new RegExp(`${name.trim()}`, 'i');
    return codes.filter(code => code.name.search(regex) >= 0);
  }

  render() {
    const { currentLineItem } = this.state;
    const item = this.props.items[currentLineItem] || this.state.emptyItem;
    const { name } = item.code;
    const codes = this._findCode(name);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={{ flex: 1 }}>
        {this.props.items.map(item => {
          const i = this.props.items.indexOf(item);
          const editable = () => i === this.state.currentLineItem;
          return (
            <NewItem
              key={i}
              item={item}
              index={i}
              editable={editable()}
              editItem={this.editItem}
              autocompleteData={editable() ? codes.length === 1 && comp(name, codes[0].name) ? [] : codes.map(code => code.name) : []} // eslint-disable-line
              onChangeAmount={this.props.onChangeItemAmount}
              onChangeCode={this.props.onChangeItemCode}
              code={this.state.codeText}
              amount={this.state.amount}
              findCode={this._findCode}
              onSubmitEditing={this.addItemToInvoice}
            />
          );
        })}
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
