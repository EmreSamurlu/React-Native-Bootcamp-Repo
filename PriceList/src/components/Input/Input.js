import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({label, onType}) => {
  return (
    <View style={styles.inputArea}>
      <Text style={styles.titles}>{label}</Text>
      <TextInput
        clearTextOnFocus={true}
        onChangeText={onType}
        style={styles.input}
      />
    </View>
  );
};

export default Input;
