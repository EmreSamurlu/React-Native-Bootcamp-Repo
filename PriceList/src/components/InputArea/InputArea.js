import React, {useState} from 'react';
import {View} from 'react-native';

import Input from '../Input';
import Button from '../Button';

const InputArea = ({onInput}) => {
  const [product, setProduct] = useState();
  const [price, setPrice] = useState(0);

  const handleAdd = () => {
    onInput(product, price);
  };

  return (
    <View>
      <Input label="Name" onType={setProduct} />
      <Input label="Price" onType={setPrice} />
      <Button title="Add" handlePress={handleAdd} />
    </View>
  );
};

export default InputArea;
