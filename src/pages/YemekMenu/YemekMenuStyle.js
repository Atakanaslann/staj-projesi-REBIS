import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const yemekler = [
  {
    id: '1',
    isim: 'Karnıyarık',
    aciklama: 'Patlıcan, kıyma, domates ve baharatlarla yapılan geleneksel bir yemek.',
    resim: 'https://example.com/karnıyarık.jpg',
  },
  {
    id: '2',
    isim: 'Mantı',
    aciklama: 'Küçük hamur parçalarının içi kıyma ile doldurularak yapılan ve yoğurtla servis edilen bir yemek.',
    resim: 'https://example.com/mantı.jpg',
  },
  {
    id: '3',
    isim: 'Dolma',
    aciklama: 'Biber, patlıcan veya yaprak içine doldurulan pirinç, kıyma ve baharat karışımı ile yapılan yemek.',
    resim: 'https://example.com/dolma.jpg',
  },
];

const YemekListesi = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>

    <View style={styles.card}>
      <Image source={{ uri: item.resim }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.isim}>{item.isim}</Text>
        <Text style={styles.aciklama}>{item.aciklama}</Text>
      </View>
    </View>
    </View>
  );

  return (
    <FlatList
      data={yemekler}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  isim: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aciklama: {
    fontSize: 14,
    color: '#666',
  },

});

export default YemekListesi;
