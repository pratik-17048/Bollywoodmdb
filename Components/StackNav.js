import { View, Text, Image } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../Screens/NewsAddaScreen';
import DetailScreen from '../Screens/NewsReleaseScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingScreen from '../Screens/ReviewScreen';
import DrawerNav from '../MyDrawer/Drawer';
import LoginScreen from '../Screens/LoginScreen';
import MovieScreen from '../Screens/MovieScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={DrawerNav} 
        options={{headerShown:false}}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Setting" component={SettingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Movie" component={MovieScreen}/>
    </Stack.Navigator>

  )
}

export default StackNav