import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TagsScreen from '../Screens/TagsScreen'
import NewsDetails from '../Screens/NewsDetail'
import NewsAddaScreen from '../Screens/NewsAddaScreen'

const StackNews = createStackNavigator();

const NewsStacks = () => {
  return (
   <StackNews.Navigator initialRouteName="NewsAdda">
       <StackNews.Screen name="NewsAdda" component={NewsAddaScreen}
       options={{headerShown:false}}
       />
       <StackNews.Screen name="NewsDetails" component={NewsDetails}
        options={{headerShown:false}}
       />
       <StackNews.Screen name="Tags" component={TagsScreen}
        options={{headerShown:false}}
       />
   </StackNews.Navigator>
  )
}

export default NewsStacks;
