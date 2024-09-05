import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import YemekListesi from './YemekMenuStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <YemekListesi />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
