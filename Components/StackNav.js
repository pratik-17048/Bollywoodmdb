import {View, Text, Image} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../Screens/NewsAddaScreen';
import DetailScreen from '../Screens/NewsReleaseScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingScreen from '../Screens/ReviewScreen';
import DrawerNav from '../MyDrawer/Drawer';
import LoginScreen from '../Screens/LoginScreen';
import MovieScreen from '../Screens/MovieScreen';
import NewsDetail from '../Screens/NewsDetail';
import TagsScreen from '../Screens/TagsScreen';
import MovieDetail from '../Screens/MovieDetails';
import StarCast from '../Screens/StarCast';
import ImagesStillScreen from '../Screens/ImagesStillScreen';
import ReviewWriteScreen from '../Screens/ReviewWriteScreen';
import Boxoffice from '../Screens/Boxoffice';
import BoxofficeReview from '../Screens/BoxofficeReview';
import Trailers from '../Screens/Trailers';
import VideoPlayer from '../Screens/VideoPlayer';
import Songs from '../Screens/Songs';
import SongPlayer from '../Screens/SongsPlayer';
import WatchlistScreen from '../Screens/WatchlistScreen';
import CelebritiesScreen from '../Screens/CelebritiesScreen';
import AboutUsScreen from '../Screens/AboutUsScreen';
import MyRating from '../Screens/MyRating';
import ReviewScreen from '../Screens/ReviewScreen';
import Posters from '../Screens/Posters';
import Banner from '../Screens/Banner';
import Parties from '../Screens/Parties';
import Events from '../Screens/Events';
import WebStories from '../Screens/WebStories';
import Stories from '../Screens/Stories';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} 
       options={{headerShown: false}}
      />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tags"
        component={TagsScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StarCast"
        component={StarCast}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Image"
        component={ImagesStillScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReviewWrite"
        component={ReviewWriteScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Boxoffice" component={Boxoffice}
       options={{headerShown: false}}/>

      <Stack.Screen name="BoxofficeReview" component={BoxofficeReview}
       options={{headerShown: false}}/>

      <Stack.Screen name="Trailers" component={Trailers}
       options={{headerShown: false}}/>

      <Stack.Screen name="VideoPlayer" component={VideoPlayer}
       options={{headerShown: false}}/>

      <Stack.Screen name="Songs" component={Songs}
       options={{headerShown: false}}/>

      <Stack.Screen name="SongPlayer" component={SongPlayer}
       options={{headerShown: false}}/>

      <Stack.Screen name="WatchList" component={WatchlistScreen}
       options={{headerShown: false}}/>

      <Stack.Screen name="Celebrities" component={CelebritiesScreen}
       options={{headerShown: false}}/>

      <Stack.Screen name="Aboutus" component={AboutUsScreen}
       options={{headerShown: false}}/>

      <Stack.Screen name="MyRating" component={MyRating}
       options={{headerShown: false}}/>

       <Stack.Screen name="Reviews" component={ReviewScreen}
       options={{headerShown: false}}/>

      <Stack.Screen name="Posters" component={Posters}
       options={{headerShown: false}}/>

      <Stack.Screen name="Banner" component={Banner}
       options={{headerShown: false}}/>

      <Stack.Screen name="Parties" component={Parties}
        options={{headerShown:false}}
       />

      <Stack.Screen name="Events" component={Events}
        options={{headerShown:false}}
       />

    <Stack.Screen name="WebStories" component={WebStories}
        options={{headerShown:false}}
       />

<Stack.Screen name="Stories" component={Stories}
        options={{headerShown:false}}
       />


    </Stack.Navigator>

  );
};

export default StackNav;
