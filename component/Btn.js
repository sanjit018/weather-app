import React from 'react';
import { Warning } from './Constant';
import { Text, TouchableOpacity } from 'react-native';
const Btn = ({name,navigation=null,val=null}) => {
  const handlePress=()=>{
    if(val && navigation)
    {
      return navigation.navigate(val)
    }
  }
  return (
    <TouchableOpacity
      style={{
        width: 250,
        borderRadius: 20,
        paddingVertical: 12,
      marginTop: 30,
      backgroundColor:Warning
      }}
      onPress={handlePress}
    >
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
export default Btn;
