import React from "react";
import {View,Text} from 'react-native'
import styles from "./RebisStyle"



const App = () => {
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.bilgi}>{data.bilgi}</Text>
            </View>
        </View>
    )
}

export default App;