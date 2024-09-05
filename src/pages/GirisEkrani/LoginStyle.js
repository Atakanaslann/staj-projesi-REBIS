import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#178A91',
    },
    topContainer:{
        flexDirection:'row'
    },
    image:{
        height:50,
        width:50,
    },
    baslikText:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        textAlignVertical:'center',
        padding:5,
        marginLeft:40
    },
    buton:{
        borderWidth:1,
        borderRadius:5,
        padding:1,
        borderColor:'lightblue',
        margin:10,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:'white'
    },   
    input: {
        width: '95%',
        height: 40,
        borderColor: 'lightblue',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,  
      },
      inputContainer:{
        alignItems:'center',
        marginTop:50
      },
      butonLogin:{
        borderWidth:1,
        padding:10,
        borderRadius:10,
        backgroundColor:'lightblue',
        marginHorizontal:35,
        marginTop:20,
        borderColor:'white'
      },
      butonText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize:18
      },
      imageContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        padding:10
      },
      imageLogo:{
        height:250,
        width:250
      },
      butonContainer:{
        flex:3,
        borderWidth:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        padding:10,
        alignItems:'center',
        backgroundColor:'white',
        borderColor:'lightblue'
      },
      


})