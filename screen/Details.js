import React, { useContext, useRef, useState } from "react"
import Background from "../component/Background";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { MinTemp, tempData } from "./Home";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAngleLeft, faAngleRight,} from '@fortawesome/free-solid-svg-icons';
import Forecast from "../component/Forecast"
import Quality from "../component/Quality"
import Card from "../component/Card"
import { WeatherContext } from "./WeatherContext";
const Details=()=>{
    const {weather} = useContext(WeatherContext)
    const [index,setIndex]=useState(0)
    const flatListRef=useRef(null)
    const next=()=>{
        if(index < tempData.length-1)
        {   
            flatListRef.current.scrollToIndex({index:index+1})
            setIndex(index+1)
        }
    }
    const prev=()=>{
        if(index > 0)
        {
            flatListRef.current.scrollToIndex({index:index-1})
            setIndex(index-1)
        }
    }
    return (
      <Background>
        <View style={{ paddingVertical: 40, width: '100%', height: 'auto' }}>
          <Text style={styles.text}>{weather.city}</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MinTemp min={weather.temperature} max={weather.max} />
          </View>
          <Text
            style={{
              paddingLeft: 30,
              color: '#fff',
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            7-Days Forecasts
          </Text>
          <View
            style={{
              height: 170,
              width: '100%',
              paddingHorizontal: 2,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
          >
            <Pressable onPress={prev}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{ color: '#fff' }}
                size={30}
              />
            </Pressable>
            <FlatList
              ref={flatListRef}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={tempData}
              renderItem={({ item }) => (
                <Forecast temp={item.temp} day={item.day} key={item.id} />
              )}
              keyExtractor={(item)=>item.id}
            ></FlatList>
            <Pressable onPress={next}>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: '#fff' }}
                size={30}
              />
            </Pressable>
          </View>
          <Quality />
          <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',width:'100%'}}>
            <Card heading={"SUNRISE"} text={weather.sunrise} optional={`Sunset: ${weather.sunset}`}/>
            <Card heading={"UV INDEX"} text={"4 Moderate"} optional={""}/>
          </View>
        </View>
      </Background>
    );
}


const styles=StyleSheet.create({
    text:{textAlign:'center',color:'#fff',fontSize:17,fontWeight:500},
})
export default Details;