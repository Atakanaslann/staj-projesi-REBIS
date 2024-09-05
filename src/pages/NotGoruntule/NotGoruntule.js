import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SinavNotlariEkrani from './NotGoruntuleStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SinavNotlariEkrani />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
