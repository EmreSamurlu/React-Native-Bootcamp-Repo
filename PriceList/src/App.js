import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import styles from './style/style';
import Input from './components/Input';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <View style={styles.filterContainer}>
        <Text>Artan Fiyat</Text>
        <Text>Azalan Fiyat</Text>
        <Text>Son Eklenen</Text>
      </View>
      <View style={styles.productCards}>
        <FlatList />
      </View>
      <View style={styles.inputArea}>
        <Input placeholder="Name" />
        <Input placeholder="Price" />
      </View>
    </SafeAreaView>
  );
};

export default App;
