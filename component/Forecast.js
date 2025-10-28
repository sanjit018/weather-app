import React from "react"
import {Image, StyleSheet, Text} from "react-native"
import LinearGradient from "react-native-linear-gradient";
import Degree from "./Degree"
const Forecast = ({temp,day,rain}) => {
  return (
    <LinearGradient
      colors={['#6325e7ff', '#c21cd4ff']}
      start={{ x: 0, y: 0 }} // gradient start point
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <Degree temp={temp}/>
      {
        (rain > 0 && rain < 20 ) ?<Image source={require('../img/sunny.png')} style={{ width: 50, height: 50, marginVertical: 8 }}/> :null
      }
      {
        (rain > 21 && rain < 50 ) ?<Image source={require('../img/cloudy.png')} style={{ width: 50, height: 50, marginVertical: 8 }}/> :null
      }
      {
        (rain > 51 && rain < 80 ) ?<Image source={require('../img/rainy.png')} style={{ width: 50, height: 50, marginVertical: 8 }}/> :null
      }
      {
        (rain > 81 && rain < 100 ) ?<Image source={require('../img/thuderstorm.png')} style={{ width: 50, height: 50, marginVertical: 8 }}/> :null
      }
      
      <Text style={{ color: '#fff', fontWeight: 500, fontSize: 17 }}>{day}</Text>
    </LinearGradient>
  );
};
const styles=StyleSheet.create({
    gradient:{
        width: 70,
        height: 160,
        borderRadius: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:5
      }
})
export default Forecast;
