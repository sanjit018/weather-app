import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Background from "../component/Background"
import Btn from "../component/Btn"
import { Warning } from "../component/Constant";
const Starter=({navigation})=>{
    return (
     <Background>
      <View style={{flex:1,alignItems:'center'}}>
        <View style={styles.container}>
            <Image source={require("../img/Weather.png")} />
        </View>
        <View style={{flex:1,height:'auto',width:'100%',alignItems:'center'}}>
            <Text style={{fontSize:55,color:'#fff',fontWeight:700}}>Weather </Text>
            <Text style={{fontSize:55,color:Warning}}>ForeCast</Text>
            <Btn name="Get Start" val={"Main"} navigation={navigation} />
        </View>
      </View>
     </Background>
      
    );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'80%',
    height:'auto',
    justifyContent:'center',
    alignItems:'center'
  }
});
export default Starter