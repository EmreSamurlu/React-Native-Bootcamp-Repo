import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import styles from './style/style';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [productItem, setProductItem] = useState();

  const handleType = text => {
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <Text>Artan Fiyat</Text>
        <Text>Azalan Fiyat</Text>
        <Text>Son Eklenen</Text>
      </View>
      <View style={styles.productCards}>
        <FlatList />
      </View>
      <View style={styles.inputArea}>
        <Input onType={handleType} placeholder="Name" />
        <Input onType={handleType} placeholder="Price" />
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default App;
