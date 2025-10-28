import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Card = ({heading,text,optional=null}) => {
  return (
    <LinearGradient
      colors={['#4e13cdff','#d04adfff']}
      start={{ x: 0, y: 0 }} // gradient start point
      end={{ x: 1, y: 1 }}
      style={{
        width: '40%',
        height: 140,
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20,
        padding: 15,
        marginHorizontal: 15,
        borderWidth:2,
        borderColor:'#fff'
      }}
    >
        <View style={{flexDirection:'row'}}>
            <FontAwesomeIcon icon={faSun} size={25} style={{color:'#fff'}} />
            <Text style={{color:'#fff',fontSize:16,marginLeft:10,fontWeight:600}}>{heading}</Text>
        </View>
        <Text style={{fontSize:26,paddingVertical:10,color:'#fff'}}>{text}</Text>
        <Text style={{color:'#fff',fontSize:16}}>{optional}</Text>
    </LinearGradient>
  );
};
export default Card;
