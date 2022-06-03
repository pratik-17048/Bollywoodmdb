import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from '../Screens/ProfileScreen';


const StackProfile = createStackNavigator();

const ProfileStack = () => {
  return (
   <StackProfile.Navigator initialRouteName="NewsAdda">
       <StackProfile.Screen name="Profile" component={ProfileScreen}
       options={{headerShown:false}}
       />

   </StackProfile.Navigator>
  )
}

export default ProfileStack;
