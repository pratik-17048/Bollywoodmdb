import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Boxoffice from '../Screens/Boxoffice'
import BoxofficeReview from '../Screens/BoxofficeReview'

const StackBox = createStackNavigator();

const BoxofficeStack = () => {
  return (
   <StackBox.Navigator initialRouteName="Boxoffice">
       <StackBox.Screen name="Boxoffice" component={Boxoffice}
       options={{headerShown:false}}
       />
       <StackBox.Screen name="BoxofficeReview" component={BoxofficeReview}
        options={{headerShown:false}}
       />
   </StackBox.Navigator>
  )
}

export default BoxofficeStack;
