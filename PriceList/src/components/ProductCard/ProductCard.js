import React from 'react';
import {View, Text} from 'react-native';

import styles from './ProductCard.style';

const ProductCard = ({product, price}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product}</Text>
      <Text style={styles.price}>{price} TL</Text>
    </View>
  );
};

export default ProductCard;
