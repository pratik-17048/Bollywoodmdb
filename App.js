import 'react-native-gesture-handler';
import {View, Text,useColorScheme} from 'react-native';
import React from 'react';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import Drawer from './MyDrawer/Drawer'
import Bottom from './BottomTabs/Bottom';
import StackNav from './Components/StackNav';





export default function App() {
  const scheme = useColorScheme(); 

  
  return (
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme}>
   

     <StackNav/>
    </NavigationContainer>
  );
}
