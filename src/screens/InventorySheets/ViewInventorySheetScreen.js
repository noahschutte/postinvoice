import React from 'react';
import { View } from 'react-native';

import InventoryReviewSection from '../../components/InventoryReviewSection';
import SingleButton from '../../components/SingleButton';

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
      <SingleButton onPress={deleteInventorySheet} buttonText='Delete' />
    </View>
  );
};

export default ViewInventorySheetScreen;
