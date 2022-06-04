import {createStackNavigator} from '@react-navigation/stack'
import MovieScreen from '../Screens/MovieScreen';
import StarCast from '../Screens/StarCast';
import MovieDetails from '../Screens/MovieDetails';
import ImagesStillScreen from '../Screens/ImagesStillScreen';
import ReviewWriteScreen from '../Screens/ReviewWriteScreen';
import NewsDetails from '../Screens/NewsDetail'
import NewsAddaScreen from '../Screens/NewsAddaScreen'
import Posters from '../Screens/Posters';
import Parties from '../Screens/Parties';
import Banner from '../Screens/Banner';
import Events from '../Screens/Events';

const StackMovie = createStackNavigator();

const MovieStack = () => {
  return (
   <StackMovie.Navigator initialRouteName="Movie">
       <StackMovie.Screen name="Movie" component={MovieScreen}
       options={{headerShown:false}}
       />
       <StackMovie.Screen name="MovieDetail" component={MovieDetails}
        options={{headerShown:false}}
       />
       <StackMovie.Screen name="StarCast" component={StarCast}
        options={{headerShown:false}}
       />
        <StackMovie.Screen name="Image" component={ImagesStillScreen}
        options={{headerShown:false}}
       />
        <StackMovie.Screen name="ReviewWrite" component={ReviewWriteScreen}
        options={{headerShown:false}}
       />

        <StackMovie.Screen name="Parties" component={Parties}
        options={{headerShown:false}}
       />

      <StackMovie.Screen name="NewsAdda" component={NewsAddaScreen}
       options={{headerShown:false}}
       />
       <StackMovie.Screen name="NewsDetails" component={NewsDetails}
        options={{headerShown:false}}
       />

      <StackMovie.Screen name="Posters" component={Posters}
       options={{headerShown:false}}
       />

      <StackMovie.Screen name="Banner" component={Banner}
        options={{headerShown:false}}
       />

      <StackMovie.Screen name="Events" component={Events}
        options={{headerShown:false}}
       />

   </StackMovie.Navigator>
  )
}

export default MovieStack;
