import { StyleSheet ,Dimensions, Animated} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#178A91'
    },
    topContainer:{
        flex:1,
        flexDirection:'row',
        
    },
    flexContainer:{
        flex:1,
        marginTop:10
    },
    butonContainer:{
        flex:3,
    },
    drawerMenu:{
        flex:1,
    },
    topMidContainer:{
        flex:3,
        borderWidth:1,
        backgroundColor:'white',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        alignItems:'center',
        borderColor:'lightblue'
    },
    phoneImage:{
        flex:1,
        alignItems:'center',
        marginTop:5
    },
    drawerImage:{
        height:40,
        width:50,
        marginTop:5
    },
    logoImage:{
        height:130,
        width:200,
    },
    phone:{
        height:60,
        width:60,
        borderRadius:50,
    },
    butonlar:{
        borderWidth:2.5,
        backgroundColor:'white',
        flex:1,
        margin:2,
        borderColor:'lightblue',
        borderRadius:5,
        alignItems:'center'
    },
    satir1:{
        flex:1,
        flexDirection:'row',
    },
    butonImage:{
        height:40,
        width:40,
        
    },
    text:{
        fontWeight:'bold',
        textAlign:'center',
        margin:8
    }
})