import React from "react"
import { Image, StyleSheet, Text, View } from "react-native";
import Degree from "./Degree";

const Temp=({temp,time})=>{
    return (
      <View style={styles.tempdata}>
        <Degree temp={temp} />
        <Image
          source={require('../img/Weather.png')}
          style={{ height: 40, width: 45, marginVertical:15}}
        />
        <Text style={[styles.cardText, { paddingVertical: 5 }]}>
          {time}
        </Text>
      </View>
    );
}
const styles = StyleSheet.create({
  tempdata: {
    paddingLeft: 20,
  },
  cardText: {
    color: '#fff',
    fontSize: 17,
  },
});
export default Temp;