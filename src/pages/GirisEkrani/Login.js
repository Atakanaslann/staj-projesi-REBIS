import React ,{useState}from "react";
import {View,Text,TextInput,StatusBar,TouchableOpacity,Image,Alert} from 'react-native'
import styles from './LoginStyle'

const App = ({navigation}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.topContainer}>
                <TouchableOpacity 
                    style={styles.buton}
                    onPress={() => navigation.goBack()}>
                    <Image source={require('../../Datalar/backImage.png')} style={styles.image}/>
                </TouchableOpacity>
                <Text style={styles.baslikText}>GİRİŞ EKRANI</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../../Datalar/rteu_logoo.png')} style={styles.imageLogo}/>
            </View>
            <View style={styles.butonContainer}>
                <TextInput
                    placeholder="E-mail"
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    style={styles.input}/>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}/>
            
            
                <TouchableOpacity
                    onPress={()=> navigation.navigate('FirstScreen')}
                    style={styles.butonLogin}>
                    <Text style={styles.butonText}>GİRİŞ YAP</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )

}

export default App;