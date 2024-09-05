import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import katilimcilar from './Katılımcılar';

const YoklamaEkrani = () => {
  const [katilimListesi, setKatilimListesi] = useState(katilimcilar);

  const toggleYoklama = (id) => {
    const yeniListe = katilimListesi.map((katilimci) => {
      if (katilimci.id === id) {
        return { ...katilimci, yoklama: !katilimci.yoklama };
      }
      return katilimci;
    });
    setKatilimListesi(yeniListe);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleYoklama(item.id)} style={styles.card}>
      <Text style={styles.ad}>{item.ad}</Text>
      <Text style={[styles.yoklama, item.yoklama ? styles.yoklamaVar : styles.yoklamaYok]}>
        {item.yoklama ? 'Var' : 'Yok'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yoklama Listesi</Text>
      <FlatList
        data={katilimListesi}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
  },
  ad: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  yoklama: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  yoklamaVar: {
    color: 'green',
  },
  yoklamaYok: {
    color: 'red',
  },
});

export default YoklamaEkrani;
