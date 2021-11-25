import {StyleSheet} from 'react-native';

export default {
  PrimaryBtn: StyleSheet.create({
    btn: {
      margin: 10,
      padding: 8,
      backgroundColor: '#34495E',
      alignItems: 'center',
      borderRadius: 7,
    },
    btnText: {
      fontWeight: 'bold',
      color: 'white',
    },
  }),
  SecondaryBtn: StyleSheet.create({
    btn: {
      alignItems: 'center',
      width: 100,
      margin: 10,
      padding: 7,
      borderWidth: 1,
      borderColor: '#34495E',
      backgroundColor: '#AEB6BF',
      borderRadius: 7,
    },
  }),
};
