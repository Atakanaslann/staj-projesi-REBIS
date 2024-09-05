import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const PhotoCaptureScreen = () => {
  const [photo, setPhoto] = useState(null);

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('Kullanıcı fotoğraf çekmeyi iptal etti.');
      } else if (response.errorCode) {
        console.log('Hata: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setPhoto(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotoğraf Çek</Text>
      <Button title="Fotoğraf Çek" onPress={takePhoto} />
      {photo && (
        <Image source={photo} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    marginTop: 20,
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});

export default PhotoCaptureScreen;
