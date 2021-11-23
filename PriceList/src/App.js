import React, {useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import styles from './style/App.style';
import InputArea from './components/InputArea';
import ProductCard from './components/ProductCard';
import FilterBar from './components/FilterBar';

const App = () => {
  const [data, setData] = useState([]);

  const handleInput = (product, price) => {
    setData([{product, price}, ...data]);
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item.product} price={item.price} />
  );

  const itemSeperator = () => <View style={styles.seperator} />;

  return (
    <SafeAreaView style={styles.container}>
      <FilterBar style={styles.filterBar} />
      <FlatList
        ItemSeparatorComponent={itemSeperator}
        data={data}
        renderItem={renderProduct}
        style={styles.list}
      />
      <InputArea style={styles.inputArea} onInput={handleInput} />
    </SafeAreaView>
  );
};

export default App;
