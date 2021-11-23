import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './FilterBar.style';

const FilterBar = () => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.btn} onPress={null}>
        <Text>Artan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={null}>
        <Text>Azalan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={null}>
        <Text>Tarih</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterBar;
