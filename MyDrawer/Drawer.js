import 'react-native-gesture-handler';
import {View, Text,Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen';
import ReviewScreen from '../Screens/ReviewScreen';
import LogoutScreen from '../Screens/LogoutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bottom from '../BottomTabs/Bottom';
import NewsAddaScreen from '../Screens/NewsAddaScreen';
import MovieScreen from '../Screens/MovieScreen';
import NewsReleaseScreen from '../Screens/NewsReleaseScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown:false,
        headerStyle: {backgroundColor: '#AAE443'},
        drawerActiveBackgroundColor: '#AAE443',
        drawerActiveTintColor: 'black',
        drawerStyle: {
          backgroundColor: 'grey',
        },
      }}
      defaultStatus="closed">
      <Drawer.Screen
        name="Home"
        component={Bottom}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="home" size={30} />,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="account" size={30} />,
        }}
      />
      <Drawer.Screen
        name="NewsAdda"
        component={NewsAddaScreen}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="newspaper" size={30} />,
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="movie-open" size={30} />,
        }}
      />
      <Drawer.Screen
        name="New Releases"
        component={NewsReleaseScreen}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="alert-decagram"
           size={30} />,
        }}
      />
       <Drawer.Screen
        name="Reviews"
        component={ReviewScreen}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="star-half-full" size={30} />,
        }}
      />

        <Drawer.Screen
        name="Logout"
        component={ProfileScreen}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="logout" size={30} />,
        }}
      />

      
    </Drawer.Navigator>

    
  );
};

export default DrawerNav;
