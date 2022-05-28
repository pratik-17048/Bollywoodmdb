import { View, Text } from 'react-native'
import React from 'react'
import{Link} from '@react-navigation/native'
import CustomHeader from '../Header/CustomHeader';

const ProfileScreen = () => {
    return (
      <View >
       <CustomHeader/>
        <Text style={{fontSize:34, color:'white'}}>ProfileScreen</Text>
      </View>
    );
  }
  export default ProfileScreen

