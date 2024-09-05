import React from 'react';
import { View, Text, TouchableOpacity,StatusBar,Image} from 'react-native';
import styles from './FirstStyle'
import OrtaKisim from './Scrool_Image/OrtaKisim'



const App = ({ navigation }) => {

  

  return (
    <View style={styles.container}>
    <StatusBar hidden={true}/>

      {/* ÜST KISIM */}
      <View style={styles.topContainer}>
        <View style={styles.drawerMenu}>


          <TouchableOpacity onPress={()=> {navigation.navigate('Home')}}>
            <Image source={require('../Datalar/menubarNew.png')} style={styles.drawerImage}/>
          </TouchableOpacity>
        </View>

        
        <View style={styles.topMidContainer}>
          <Image source={require('../Datalar/headline.jpg')} style={styles.logoImage} />
        </View>
        <View style={styles.phoneImage}>
          <TouchableOpacity onPress={()=>navigation.navigate("CallPhone")}>
            <Image source={require('../Datalar/phone.png')} style={styles.phone}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* FLEX KISMI */}
      <View style={styles.flexContainer}>
        <OrtaKisim/>
      </View>

      {/* BUTONLAR */}
      <View style={styles.butonContainer}>
        
        {/* 1.SATIR */}
        <View style={styles.satir1}>

          <TouchableOpacity
           style={styles.butonlar}
           onPress={()=>navigation.navigate('DersProgrami')}>
            <Image source={require('../Datalar/dersprogrami.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Ders Programı</Text>
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.butonlar}
           onPress={()=> navigation.navigate('Rebis')}>
            <Image source={require('../Datalar/rebis.png')} style={styles.butonImage}/>
            <Text style={styles.text}>REBİS</Text>
          </TouchableOpacity>

        </View>

        {/* 2.SATIR */}
        <View style={styles.satir1}>

          <TouchableOpacity 
            style={styles.butonlar}
            onPress={()=>navigation.navigate('OdeGec')}>
            <Image source={require('../Datalar/odegec.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Öde Geç</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.butonlar} onPress={()=> navigation.navigate("NotGoruntule")}>
            <Image source={require('../Datalar/exam.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Not Görüntüleme</Text>
          </TouchableOpacity>

        </View>

        {/* 3.SATIR */}
        <View style={styles.satir1}>

          <TouchableOpacity style={styles.butonlar} onPress={()=>navigation.navigate("YoklamaAl")}>
            <Image source={require('../Datalar/yoklama.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Yoklama Al</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.butonlar} onPress={(navigation.navigate("BakiyeRezervasyon"))}>
            <Image source={require('../Datalar/purse.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Bakiye - Rezervasyon</Text>
          </TouchableOpacity>

        </View>

        {/* 4.SATIR */}
        <View style={styles.satir1}>

          <TouchableOpacity 
            style={styles.butonlar}
            onPress={()=> navigation.navigate("YemekMenu")}>
            <Image source={require('../Datalar/foodmenu.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Yemek Menüsü</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.butonlar} onPress={()=>navigation.navigate("University360")}>
            <Image source={require('../Datalar/university.png')} style={styles.butonImage}/>
            <Text style={styles.text}>360 Üniversite</Text>
          </TouchableOpacity>

        </View>

        {/* 5.SATIR */}
        <View style={styles.satir1}>

          <TouchableOpacity style={styles.butonlar} onPress={()=> navigation.navigate("CekGonder")}>
            <Image source={require('../Datalar/phonecamera.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Çek Gönder</Text>
          </TouchableOpacity>

          <TouchableOpacity 
           style={styles.butonlar}
           onPress={()=>navigation.navigate('Belgeler')}>
            <Image source={require('../Datalar/documents.png')} style={styles.butonImage}/>
            <Text style={styles.text}>Belgeler</Text>
          </TouchableOpacity>

        </View>      
      </View>
    </View>

    
  );
};


export default App;
