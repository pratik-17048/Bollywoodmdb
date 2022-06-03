import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Songs from '../Screens/Songs'
import SongsPlayer from '../Screens/SongsPlayer'

const StackSong = createStackNavigator();

const SongStack = () => {
  return (
   <StackSong.Navigator initialRouteName="Songs">
       <StackSong.Screen name="Songs" component={Songs}
       options={{headerShown:false}}
       />
       <StackSong.Screen name="SongPlayer" component={SongsPlayer}
        options={{headerShown:false}}
       />
      
   </StackSong.Navigator>
  )
}

export default SongStack;
