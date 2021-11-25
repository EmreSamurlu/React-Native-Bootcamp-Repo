import React from 'react';
import {View} from 'react-native';

import styles from './FilterBar.style';
import Button from '../Button';

const FilterBar = ({ascending, descending, regular}) => {
  return (
    <View style={styles.filterContainer}>
      <Button
        handlePress={ascending}
        title="Artan Fiyat"
        theme="SecondaryBtn"
      />
      <Button
        handlePress={descending}
        title="Azalan Fiyat"
        theme="SecondaryBtn"
      />
      <Button handlePress={regular} title="Tarih" theme="SecondaryBtn" />
    </View>
  );
};

export default FilterBar;
