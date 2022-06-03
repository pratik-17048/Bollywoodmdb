import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Trailers from '../Screens/Trailers'
import {createStackNavigator} from '@react-navigation/stack'
import VideoPlayer from '../Screens/VideoPlayer';

const StackTrailer = createStackNavigator();

const TrailerStack = () => {
  return (
   <StackTrailer.Navigator initialRouteName="Trailers">
       <StackTrailer.Screen name="Trailers" component={Trailers}
       options={{headerShown:false}}
       />
       <StackTrailer.Screen name="VideoPlayer" component={VideoPlayer}
        options={{headerShown:false}}
       />
     
   </StackTrailer.Navigator>
  )
}

export default TrailerStack;
