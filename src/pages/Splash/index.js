import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILlogo} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 20,
  },
});
