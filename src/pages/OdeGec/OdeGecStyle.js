import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const OdemeEkrani = () => {
  const [isim, setIsim] = useState('');
  const [kartNumarasi, setKartNumarasi] = useState('');
  const [sonKullanmaTarihi, setSonKullanmaTarihi] = useState('');
  const [cvv, setCvv] = useState('');

  const handleOdeme = () => {
    if (isim && kartNumarasi && sonKullanmaTarihi && cvv) {
      Alert.alert('Ödeme Onayı', 'Ödeme başarıyla gerçekleştirildi!');
    } else {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ödeme Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="Kart Üzerindeki İsim"
        value={isim}
        onChangeText={(text) => setIsim(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Kart Numarası"
        value={kartNumarasi}
        onChangeText={(text) => setKartNumarasi(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Son Kullanma Tarihi (MM/YY)"
        value={sonKullanmaTarihi}
        onChangeText={(text) => setSonKullanmaTarihi(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={(text) => setCvv(text)}
        keyboardType="numeric"
        secureTextEntry
      />
      <Button title="Ödeme Yap" onPress={handleOdeme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
});

export default OdemeEkrani;
