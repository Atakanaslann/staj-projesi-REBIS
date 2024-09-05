import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {View, Text,StyleSheet,Button} from 'react-native';
const App = ({navigation}) => {
  const rteu = {
    latitude: 41.0380364261509, 
    longitude: 40.493156509469756,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };
  const First = () => {
    navigation.navigate('FirstScreen');
  };
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      initialRegion={rteu}
      camera={true}>
      <Marker coordinate={rteu}>
        <Callout style={styles.container}>
          <View >
            <Text style={styles.text}>RTEÜ</Text>
            <Button title='buton' onPress={First}/>
          </View>
        </Callout>
      </Marker>
      <Marker coordinate={rteu} />
    </MapView>
  );
};
export default App;

const styles = StyleSheet.create({
    text:{
        fontSize:25
    },
    container:{
        borderWidth:1,
        flex:1
    }
})
