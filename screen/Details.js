import React, { useContext, useEffect, useRef, useState } from "react"
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
  const [Foercast,setFoercast]=useState({
    time:[],
    temperature:[],
    precipitation:[]
  })

  const CombineData=Foercast.time.map((date,int)=>{
    const DayName=new Date(date).toLocaleString('en-US',{'weekday':"short"})
    const RoundTemp = Math.round(Foercast.temperature[int])
    const RoundRain = Math.round(Foercast.precipitation[int])
    return{
      id:int.toString(),
      day:DayName,
      temp:RoundTemp,
      rain:RoundRain
    }
  })
    const {weather} = useContext(WeatherContext)
    const [index,setIndex]=useState(0)
    const flatListRef=useRef(null)
    const next=()=>{
        if(index < CombineData.length-1)
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
    useEffect(() => {
      const fore = fetch(
        `https://my.meteoblue.com/packages/basic-day?apikey=zwonqSu3HXtFv0WJ&lat=${weather.lat}&lon=${weather.long}&asl=8&format=json&tz=GMT`,
      ).then(response => response.json())
        .then(data => {
          if (data && data.data_day) {
            setFoercast({
              time: data.data_day.time,
              temperature: data.data_day.temperature_max,
              precipitation: data.data_day.precipitation_probability,
            });
          }
        }).catch((res)=>console.log(res))
    }, [weather.lat,weather.long]);
    return (
      <Background>
        <View style={{ paddingVertical: 25, width: '100%', height: 'auto' }}>
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
              data={CombineData}
              renderItem={({ item }) => (
                <Forecast temp={item.temp} day={item.day} rain={item.rain} key={item.id} />
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
            <Card heading={"UV INDEX"} text={weather.uvindex} optional={""}/>
          </View>
        </View>
      </Background>
    );
}


const styles=StyleSheet.create({
    text:{textAlign:'center',color:'#fff',fontSize:27,fontWeight:500},
})
export default Details;