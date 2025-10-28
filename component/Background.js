import React from "react"
import {StatusBar, StyleSheet } from "react-native"

import LinearGradient from 'react-native-linear-gradient';
import { Nav } from "./Constant";
const Background=({children})=>{
    return (
      <LinearGradient
        colors={['#000dffba', '#4e13cdff', '#6325e7ff', '#c21cd4ff']} // gradient colors
        start={{ x: 0, y: 0 }} // gradient start point
        end={{ x: 1, y: 1 }} // gradient end point
        style={styles.gradient}
        angle={45}
      >
        <StatusBar barStyle={'light-content'} backgroundColor={Nav} />
        {children}
      </LinearGradient>
    );
}
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
export default Background