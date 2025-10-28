import { faAirFreshener, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
const Quality=()=>{
    return (
      <LinearGradient
        colors={['#6325e7ff', '#c21cd4ff']}
        start={{ x: 0, y: 0 }} // gradient start point
        end={{ x: 1, y: 1 }}
        style={{width:'80%',height:140,alignSelf:'center',borderRadius:20,marginVertical:20,padding:20}}
      >
        <View style={{flexDirection:'row'}}>
            <FontAwesomeIcon icon={faAirFreshener} style={{color:'#fff'}} size={20}/>
            <Text style={{color:'#fff',fontSize:15,marginLeft:10,fontWeight:600}}>AIR QUALITY</Text>
        </View>
        <Text style={{fontSize:25,paddingVertical:10,color:'#fff',fontWeight:700}}>3-Low Health Risk</Text>
        <View style={{borderTopColor:'#6325e7ff',borderTopWidth:4,flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
            <Text style={{color:'#fff',fontSize:14,fontWeight:600}}>See more</Text>
            <FontAwesomeIcon icon={faAngleRight} style={{color:'#fff'}} size={25} />
        </View>
      </LinearGradient>
    );
}
export default Quality