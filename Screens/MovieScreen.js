import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../Header/CustomHeader';

const MovieScreen = () => {
  return (
    <View >
     <CustomHeader/>
      <Text style={{fontSize:34, color:'white'}}>MovieScreen</Text>
    </View>
  );
  }
  export default MovieScreen;