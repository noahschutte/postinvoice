import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import InventoryReviewSection from '../../components/InventoryReviewSection';

const ViewInventorySheetScreen = ({
  item,
  deleteInventorySheet
}) => {
  return (
    <View style={{ flex: 1 }}>
      <InventoryReviewSection
        amount={item.wine_total}
        type='Wine'
      />
      <InventoryReviewSection
        amount={item.beer_total}
        type='Beer'
      />
      <InventoryReviewSection
        amount={item.food_total}
        type='Food'
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{
            backgroundColor: '#efeffa',
            padding: 15,
            elevation: 1,
            borderRadius: 2,
          }}
          onPress={deleteInventorySheet}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewInventorySheetScreen;
