import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  productCards: {
    flex: 0.7,
  },
  inputArea: {
    flex: 0.3,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
});
