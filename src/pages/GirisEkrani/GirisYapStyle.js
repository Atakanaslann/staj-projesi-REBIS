import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#178A91'
    },
    imageContainer:{
        flex:3,
        alignItems:'center',
        justifyContent:'center'
    },
    butonContainer:{
        flex:1,
        
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:'lightblue',
        padding:3
    },
    buton:{
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'white',
        marginHorizontal:35,
        borderColor:'lightblue'
    },
    image:{
        height:350,
        width:350
    },
    linkLabel:{
        color:'white',
        textAlign:'center',
        padding:10,
        fontWeight:'bold'
    },
    linkLabel2:{
        color:'lightblue',
        fontStyle:'italic',
        textDecorationLine:'underline',
        fontWeight:'bold'

    }

})