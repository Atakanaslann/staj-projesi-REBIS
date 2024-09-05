import React,{useState} from "react";
import {View,Text,Image,TouchableOpacity,TextInput,StatusBar, Alert} from 'react-native'
import styles from './KayitOlStyle'


const App = ({navigation}) => {
    const [ad,setAd] = useState('')
    const [soyad,setSoyad] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.topContainer}>
                <View style={styles.topLeft}>
                    <TouchableOpacity style={styles.backButon} onPress={()=>navigation.goBack()}>
                        <Image source={require('../../Datalar/backImage.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={styles.logoImage} source={require('../../Datalar/headline.jpg')}/>
                </View>
            </View>
            <View style={styles.inputContainer}>
                
                <View style={styles.inputUpdate}>
                    <Text style={styles.text}>KAYIT OL</Text>
                    <TextInput
                        placeholder="Adınızı Giriniz..."
                        value={ad}
                        autoCapitalize="none"
                        onChangeText={setAd}
                        style={styles.input}/>
                    <TextInput
                        placeholder="Soyadınızı Giriniz..."
                        value={soyad}
                        autoCapitalize="none"
                        onChangeText={setSoyad}
                        style={styles.input}/>
                    <TextInput
                        placeholder="Email..."
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        style={styles.input}/>
                    <TextInput
                        placeholder="Şifre..."
                        value={password}
                        autoCapitalize="none"
                        keyboardType="visible-password"
                        onChangeText={setPassword}
                        style={styles.input}/>
                </View>
            </View>
            <View style={styles.butonContainer}>
                <TouchableOpacity style={styles.buton}>
                    <Text style={styles.text}>KAYIT OL</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
export default App;