import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import WebStories from '../Screens/WebStories';
import Stories from '../Screens/Stories';


const StackWeb = createStackNavigator();

const ProfileStack = () => {
  return (
   <StackWeb.Navigator initialRouteName="WebStories">
       <StackWeb.Screen name="WebStories" component={WebStories}
       options={{headerShown:false}}
       />

    <StackWeb.Screen name="Stories" component={Stories}
       options={{headerShown:false}}
       />


   </StackWeb.Navigator>
  )
}

export default ProfileStack;
