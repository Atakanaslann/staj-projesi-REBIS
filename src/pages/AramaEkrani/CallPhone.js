import React from 'react';
import { View, Button, Linking, Text,Image } from 'react-native';
import styles from './CallPhoneStyle'

const CallScreen = () => {
  const phoneNumber = '+904642236126';

  const makeCall = () => {
    Linking.openURL(`tel:${phoneNumber}`)
      .catch((err) => console.error('Arama başlatılamadı', err));
  };

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Image source={require('../../Datalar/phone.png')} style={styles.image} resizeMode='stretch'/>
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.text}>Aramak istediğiniz numara: {phoneNumber}</Text>
            <Button title="Ara" onPress={makeCall} color="green" />
        </View>
    </View>
  );
};

export default CallScreen;