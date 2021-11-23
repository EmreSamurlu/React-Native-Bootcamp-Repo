import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ProductCard = ({product, price}) => {
  return (
    <View style={styles.card}>
      <Text>{`${product} ${price}`}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
  },
});
