import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import sinavNotlari from './Notlar';

const SinavNotlariEkrani = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.ders}>{item.ders}</Text>
      <Text style={styles.not}>Not: {item.not}</Text>
      <Text style={styles.tarih}>Tarih: {item.tarih}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sınav Notlarım</Text>
      <FlatList
        data={sinavNotlari}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
  },
  ders: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  not: {
    fontSize: 16,
    color: '#333',
  },
  tarih: {
    fontSize: 14,
    color: '#666',
  },
});

export default SinavNotlariEkrani;
