import React, { useContext, useEffect} from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Background from '../component/Background'
import LinearGradient from 'react-native-linear-gradient';
import Temp from "../component/Temp"
import Degree from '../component/Degree';
import { WeatherContext } from './WeatherContext';
export const tempData=[
  {"id":1,"temp":"18","time":"15:00","day":'Mon'},
  {"id":2,"temp":"19","time":"16:00","day":'Tue'},
  {"id":3,"temp":"17","time":"17:00","day":'Wed'},
  {"id":4,"temp":"17","time":"18:00","day":'Thu'},
  {"id":5,"temp":"16","time":"19:00","day":'Fri'},
  {"id":6,"temp":"16","time":"20:00","day":'Sat'},
  {"id":7,"temp":"15","time":"21:00","day":'Sun'},
]
const Home=({navigation})=>{
  const { weather, setWeather } = useContext(WeatherContext);
  useEffect(()=>{
    const result = fetch("https://api.weatherstack.com/current?access_key=d09242fae1acd7af81840358b6ef7e8e&query=Asansol").then(response=>response.json()).then(data=>{
      if(data && data.current)
      {
        const localtime = data.location.localtime;
        const date = new Date(localtime.replace(' ', 'T'));
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        const currentData=`${month}, ${day}`
        setWeather({
          temperature: data.current.temperature,
          description: data.current.weather_descriptions[0],
          icon: data.current.weather_icons[0],
          max: data.current.feelslike,
          today:currentData,
          city:data.location.name,
          sunrise:data.current.astro.sunrise,
          sunset:data.current.astro.sunset
        });
      }
    })
  },[])
    return (
      <Background>
        <View
          style={{
            width: '100%',
            height: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
          }}
        >
          {weather.icon ? (
            <Image
              source={{ uri: weather.icon }}
              style={{ width: 130, height: 120 }}
            />
          ) : (
            <Image
              source={require('../img/Weather.png')}
              style={{ width: 130, height: 120 }}
            />
          )}

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#fff', fontSize: 30, fontWeight: 700 }}>
              {weather.temperature}
            </Text>
            <Text style={{ color: '#fff' }}>o</Text>
            <Text style={{ color: '#fff', fontSize: 30, fontWeight: 700 }}>
              C
            </Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 15 }}>
            {weather.description}
          </Text>
          <MinTemp min={weather.temperature} max={weather.max} />
          <Image
            source={require('../img/home.png')}
            style={{ height: 140, width: 180 }}
            onPress={() => navigation.navigate('Details')}
          />
          <LinearGradient
            colors={['#6325e7ff', '#4e13cdff', '#7d088aff']} // gradient colors
            start={{ x: 0, y: 0 }} // gradient start point
            end={{ x: 1, y: 1 }} // gradient end point
            style={styles.card}
            angle={45}
          >
            <View style={styles.card_head}>
              <Text style={styles.cardText}>Today</Text>
              <Text style={styles.cardText}>{weather.today}</Text>
            </View>
            <View style={styles.card_body}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={tempData}
                renderItem={({ item }) => (
                  <Temp temp={item.temp} time={item.time} />
                )}
                keyExtractor={item => item.id}
              ></FlatList>
            </View>
          </LinearGradient>
          
        </View>
      </Background>
    );
}

export const MinTemp=({min,max})=>{
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: -10,
        width: '45%',
        marginBottom: 30,
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingTop: 10,
        }}
      >
        <Text style={styles.temp}>Max:{max}</Text>
        <Text style={styles.deg}>o</Text>
      </View>
      
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingTop: 10,
        }}
      >
        <Text style={styles.temp}>Min:{min}</Text>
        <Text style={styles.deg}>o</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    temp:{ color: '#fff', fontSize: 15 },
    deg:{ marginTop: -2, color: '#fff',fontSize:11 },
    card:{borderRadius:20,marginTop:50},
    card_head:{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#ffffffff',borderBottomWidth:1,width:'100%',paddingVertical:15,paddingHorizontal:30},
    cardText:{
      color:'#fff',
      fontSize:17
    },
    card_body:{
      paddingVertical:35,
      flexDirection:'row',
      paddingHorizontal:10,
      flexWrap:'wrap'
    },
    
})
export default Home