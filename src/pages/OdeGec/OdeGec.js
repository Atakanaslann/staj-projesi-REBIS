import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import OdemeEkrani from './OdeGecStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OdemeEkrani />
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
