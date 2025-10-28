import React from "react"
import { StyleSheet, Text, View } from "react-native";
const Degree=({temp})=>{
    return (
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Text style={styles.text}>
            {temp}
          </Text>
          <Text style={{ marginTop: -4, color: '#fff' }}>o</Text>
          <Text style={[styles.text,{marginLeft:3 }]}>C</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    text:{ color: '#fff', fontSize: 17, fontWeight: 500 }
})
export default Degree;