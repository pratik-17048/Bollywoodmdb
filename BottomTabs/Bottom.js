import 'react-native-gesture-handler';
import {View, Text,StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewsAddaScreen from '../Screens/NewsAddaScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import NewsReleaseScreen from '../Screens/NewsReleaseScreen';
import MovieScreen from '../Screens/MovieScreen';

const Tabs = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tabs.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'black',
      tabBarStyle: {backgroundColor: '#D8392B', minHeight: 55},
      headerShown: false,
      tabBarLabelStyle:{fontWeight:'500'},
     
     
    }}
    >
      <Tabs.Screen
        name="Home"
        
        component={HomeScreen}
        options={{
          
          tabBarIcon: ({focused}) => (
           <View>
             <Image
             source={require('../Assets/homee.png')}
             resizeMode='contain'
             style={{
               width:25,
               height:25,
               tintColor: focused ? 'white' : 'black'
             }}
             />


           </View>
          )
        }}
      />
      <Tabs.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          
          tabBarIcon: ({focused}) => (
           <View>
             <Image
             source={require('../Assets/profile.png')}
             resizeMode='contain'
             style={{
               width:25,
               height:25,
               tintColor: focused ? 'white' : 'black'
             }}
             />


           </View>
          ),
        }}
      />
      <Tabs.Screen
        name="NewsAdda"
        component={NewsAddaScreen}
        options={{
          
          tabBarIcon: ({focused}) => (
           <View>
             <Image
             source={require('../Assets/news.png')}
             resizeMode='contain'
             style={{
               width:25,
               height:25,
               tintColor: focused ? 'white' : 'black'
             }}
             />


           </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          
          tabBarIcon: ({focused}) => (
           <View>
             <Image
             source={require('../Assets/movie.png')}
             resizeMode='contain'
             style={{
               width:25,
               height:25,
               tintColor: focused ? 'white' : 'black'
             }}
             />


           </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};



export default Bottom;
