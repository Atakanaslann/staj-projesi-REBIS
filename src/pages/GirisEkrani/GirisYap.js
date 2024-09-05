import React from "react";
import {View,Text,Image, TouchableOpacity,StatusBar,Animated} from 'react-native'
import styles from './GirisYapStyle'

const App = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.imageContainer}>
                <Image source={require('../../Datalar/rteu_logoo.png')} resizeMode='stretch' style={styles.image}/>
            </View>
            <View style={styles.butonContainer} >
                <TouchableOpacity 
                    style={styles.buton} 
                    onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.text}>GİRİŞ YAP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('KayitOl')}>
                    <Text style={styles.linkLabel}>Kayıt olmak için <Text style={styles.linkLabel2}>TIKLA</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App;