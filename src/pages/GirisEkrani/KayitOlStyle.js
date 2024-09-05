import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#178A91'
    },
    topContainer:{
        flex:1,
        flexDirection:'row',
    },
    inputContainer:{
        flex:2,
        borderWidth:1,
        borderRadius:15,
        backgroundColor:'white',
        borderColor:'lightblue',
        marginLeft:10,
        marginRight:10,
        justifyContent:'center'
    },
    butonContainer:{
        flex:1,
        alignItems:'center'
    },
    logoImage:{
        height:130,
        width:250,
        borderBottomLeftRadius:70,
        borderBottomRightRadius:70,
        marginLeft:10
    },
    topCenter:{
        flex:3,
        alignItems:'center',
        flexDirection:'row'
        
    },
    input:{
        borderWidth:1,
        textAlign:'center',
        width:'90%',
        padding:5,
        borderColor:'lightblue',
        borderRadius:5,
        margin:5,
    },
    inputUpdate:{
        alignItems:'center',
    },
    text:{
        fontSize:20,
        color:'lightblue',
        fontWeight:'bold',
    },
    buton:{
        borderWidth:1,
        width:'92%',
        alignItems:'center',
        borderRadius:15,
        padding:10,
        margin:15,
        backgroundColor:'white',
        borderColor:'lightblue'

    },
    image:{
        height:50,
        width:50,
    },
    
    backButon:{
        borderWidth:1,
        backgroundColor:'white',
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderColor:'lightblue',
        marginTop:15,
        marginLeft:10
    }
})