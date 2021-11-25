import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

const Button = ({handlePress, title, theme = 'PrimaryBtn'}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles[theme].btn}>
      <Text style={styles[theme].btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
