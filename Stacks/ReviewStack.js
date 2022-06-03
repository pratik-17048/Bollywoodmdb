import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TagsScreen from '../Screens/TagsScreen'
import NewsDetails from '../Screens/NewsDetail'
import NewsAddaScreen from '../Screens/NewsAddaScreen'
import ReviewScreen from '../Screens/ReviewScreen'

const StackReview = createStackNavigator();

const ReviewStack = () => {
  return (
   <StackReview.Navigator initialRouteName="Review">
       <StackReview.Screen name="Review" component={ReviewScreen}
       options={{headerShown:false}}
       />
       <StackReview.Screen name="NewsDetails" component={NewsDetails}
        options={{headerShown:false}}
       />

   </StackReview.Navigator>
  )
}

export default NewsStacks;
