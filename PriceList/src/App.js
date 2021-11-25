import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View, Alert} from 'react-native';

import styles from './style/App.style';
import InputArea from './components/InputArea';
import ProductCard from './components/ProductCard';
import FilterBar from './components/FilterBar';

import {sortAscending, sortDescending, regular} from './functions/sorting';

const App = () => {
  const [data, setData] = useState([]);

  const handleInput = (product, price) => {
    if (!product || !price) {
      return Alert.alert('Alan Boş Bırakılamaz!');
    } else {
      const productData = {
        product,
        price,
        id: new Date(),
      };
      setData([productData, ...data]);
    }
  };

  const itemSeperator = () => <View style={styles.seperator} />;

  const handleAscending = () => {
    sortAscending(data, setData);
  };
  const handleDescending = () => {
    sortDescending(data, setData);
  };
  const handleDate = () => {
    regular(data, setData);
  };

  //Auto sort by id
  useEffect(() => {
    data.sort((a, b) => b.id - a.id);
  }, [data]);

  const renderProduct = ({item}) => (
    <ProductCard product={item.product} price={item.price} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FilterBar
        style={styles.filterBar}
        ascending={handleAscending}
        descending={handleDescending}
        regular={handleDate}
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
