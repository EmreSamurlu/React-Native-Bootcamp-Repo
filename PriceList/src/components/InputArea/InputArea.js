import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const InputArea = ({onInput}) => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    onInput(product, price);
  };

  return (
    <View>
      <TextInput onChangeText={setProduct} style={styles.input} />
      <TextInput onChangeText={setPrice} style={styles.input} />
      <TouchableOpacity onPress={handleAdd} style={styles.btn}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputArea;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 5,
  },
  btn: {
    margin: 10,
    padding: 10,
    backgroundColor: '#efefef',
    alignItems: 'center',
  },
});
