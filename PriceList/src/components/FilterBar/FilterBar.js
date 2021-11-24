import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './FilterBar.style';

const FilterBar = ({ascending, descending, regular}) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.btn} onPress={ascending}>
        <Text>Artan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={descending}>
        <Text>Azalan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={regular}>
        <Text>Tarih</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterBar;
