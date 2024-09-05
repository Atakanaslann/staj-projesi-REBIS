import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor:'#178A91',
      },
      topContainer:{
        flex:1,
        padding:5,
        alignItems:'center',
        marginTop:20
      },
      bottomContainer:{
        flex:1,
        justifyContent:'center'
      },
      image:{
        flex:1,
        height:Dimensions.get('window').height/200,
        width:Dimensions.get('window').width/2,
        borderRadius:20
      },
      text:{
        fontSize:15,
        fontWeight:'bold',
        padding:5
      }
})