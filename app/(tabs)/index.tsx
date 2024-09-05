import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../../src/pages/First'
import DersProgram from '../../src/pages/DersProgram/DersProgrami'
import University360 from '../../src/pages/360University/360University'
import BakiyeRezervasyon from '../../src/pages/BakiyeRezervasyon/BakiyeRezervasyon'
import Belgeler from '../../src/pages/Belgeler/Belgeler'
import CekGonder from '../../src/pages/CekGonder/CekGonder'
import NotGoruntule from '../../src/pages/NotGoruntule/NotGoruntule'
import OdeGec from '../../src/pages/OdeGec/OdeGec'
import Rebis from '../../src/pages/REBIS/Rebis'
import YemekMenu from '../../src/pages/YemekMenu/YemekMenu'
import YoklamaAl from '../../src/pages/YoklamaAl/Yoklama'
import CallPhone from '../../src/pages/AramaEkrani/CallPhone'
import Login from '../../src/pages/GirisEkrani/Login'
import KayitOl from '../../src/pages/GirisEkrani/KayitOl'
import GirisYap from '../../src/pages/GirisEkrani/GirisYap'
import DrawerMenu from '../../src/pages/DrawerNavigation/DrawerMenu'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Root} />
      <Drawer.Screen name="1" component={DrawerMenu} />

    </Drawer.Navigator>
  );
}


function App(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="GirisYap" component={GirisYap} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DersProgrami" component={DersProgram} options={{ headerShown: false }}/>
        <Stack.Screen name="University360" component={University360} options={{ headerShown: false }}/>
        <Stack.Screen name="BakiyeRezervasyon" component={BakiyeRezervasyon} options={{ headerShown: false }}/>
        <Stack.Screen name="Belgeler" component={Belgeler} options={{ headerShown: false }}/>
        <Stack.Screen name="CekGonder" component={CekGonder} options={{ headerShown: false }}/>
        <Stack.Screen name="NotGoruntule" component={NotGoruntule} options={{ headerShown: false }}/>
        <Stack.Screen name="OdeGec" component={OdeGec} options={{ headerShown: false }}/>
        <Stack.Screen name="Rebis" component={Rebis} options={{ headerShown: false }}/>
        <Stack.Screen name="YemekMenu" component={YemekMenu} options={{ headerShown: false }}/>
        <Stack.Screen name="YoklamaAl" component={YoklamaAl} options={{ headerShown: false }}/>
        <Stack.Screen name="CallPhone" component={CallPhone} options={{ headerShown: false }}/>
        <Stack.Screen name="KayitOl" component={KayitOl} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Root} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;
