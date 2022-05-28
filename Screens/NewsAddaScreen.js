import { View, Text } from 'react-native'
import React from 'react'
import{Link} from '@react-navigation/native'
import CustomHeader from '../Header/CustomHeader';

const NewsAddaScreen = () => {
  return (
    <View >
     <CustomHeader/>
      <Text style={{fontSize:34, color:'white'}}>NewsAdda</Text>
    </View>
  );
  }
  export default NewsAddaScreen;

