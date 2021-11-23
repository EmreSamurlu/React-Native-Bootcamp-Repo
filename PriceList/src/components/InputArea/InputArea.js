import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';

import styles from './InputArea.style';

const InputArea = ({onInput}) => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    onInput(product, price);
  };

  return (
    <View>
      <View style={styles.inputArea}>
        <Text style={styles.titles}>Name</Text>
        <TextInput onChangeText={setProduct} style={styles.input} />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.titles}>Price</Text>
        <TextInput onChangeText={setPrice} style={styles.input} />
      </View>
      <TouchableOpacity onPress={handleAdd} style={styles.btn}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputArea;
