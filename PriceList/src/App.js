import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import styles from './style/App.style';
import InputArea from './components/InputArea';
import ProductCard from './components/ProductCard';
import FilterBar from './components/FilterBar';

const App = () => {
  const [data, setData] = useState([]);

  const handleInput = (product, price) => {
    const productData = {
      name: product,
      price: price,
      id: Math.random(),
      date: new Date(),
    };
    setData([productData, ...data]);
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item.name} price={item.price} />
  );

  const itemSeperator = () => <View style={styles.seperator} />;

  const sortAscending = () => {
    data.sort((a, b) => a.price - b.price);
    setData([...data]);
  };
  const sortDescending = () => {
    data.sort((a, b) => b.price - a.price);
    setData([...data]);
  };
  const regular = () => {
    data.sort((a, b) => b.date - a.date);
    setData([...data]);
  };

  useEffect(() => {
    data.sort((a, b) => a.price - b.price);
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <FilterBar
        style={styles.filterBar}
        ascending={sortAscending}
        descending={sortDescending}
        regular={regular}
      />
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
