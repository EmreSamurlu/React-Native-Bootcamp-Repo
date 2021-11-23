import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, View} from 'react-native';

import InputArea from './components/InputArea';

const App = () => {
  const [data, setData] = useState([]);
  const handleInput = (product, price) => {
    setData([{product, price}, ...data]);
  };

  const renderProduct = ({item}) => {
    return (
      <View style={styles.card}>
        <Text>{`${item.product} ${item.price}`}</Text>
      </View>
    );
  };

  console.log(data);

  return (
    <SafeAreaView>
      <Text>hello</Text>
      <FlatList data={data} renderItem={renderProduct} style={styles.list} />
      <InputArea onInput={handleInput} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#e0e0e0',
    height: 300,
  },
  card: {},
});
