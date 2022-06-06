import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  StyleSheet,FlatList
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../Header/CustomHeader';



const YearData = [
  {
    id: 1,
    selected:false,
    month: 'Jan',
    year: '2022',
  },
  {
    id: 2,
    selected:false,
    month: 'Feb',
    year: '2022',
  },
  {
    id: 3,
    selected:false,
    month: 'Mar',
    year: '2022',
  },
  {
    id: 4,
    selected:false,
    month: 'Apr',
    year: '2022',
  },
  {
    id: 5,
    selected:false,
    month: 'May',
    year: '2022',
  },
  {
    id: 6,
    selected:false,
    month: 'June',
    year: '2022',
  },
  {
    id: 7,
    selected:false,
    month: 'Jul',
    year: '2022',
  },
  {
    id: 8,
    selected:false,
    month: 'Aug',
    year: '2022',
  },
  {
    id: 9,
    selected:false,
    month: 'Sept',
    year: '2022',
  },
  {
    id: 10,
    selected:false,
    month: 'Oct',
    year: '2022',
  },
  {
    id: 11,
    selected:false,
    month: 'Nov',
    year: '2022',
  },
  {
    id: 12,
    selected:false,
    month: 'Dec',
    year: '2022',
  },
];

const Calendar = ({month, year ,id, })=>{
  const { colors } = useTheme();
  const [selected, setSelected]= React.useState(false)
  return(
    <TouchableOpacity
          onPress={() => setSelected(prevState=> !prevState)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor:'#666666',
            borderWidth:1,
            padding: 10,
            margin: 5,
          }}>
          <Text style={{color:colors.text}} >{month}</Text>
          <Text style={{color:colors.text}} >{year}</Text>
        </TouchableOpacity>
  )
}

const CalendarComp = () => {

  const renderItem = ({item}) => (
    <Calendar month={item.month} year={item.year} id={item.id} ></Calendar>
  );
  return (
    <View style={{marginHorizontal: 10, marginVertical: 2}}>
      <SafeAreaView style={{marginTop:20}}>
      <FlatList
        horizontal={true}
        data={YearData}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
   
    </View>
  );
};

const MoviePosters = ({navigation}) => {
  return (
    <View style={{margin: 2}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{margin: 2}}
          onPress={() => navigation.navigate('MovieDetail', {videoId:'WHXxVmeGQUc', 
          poster: require('../Assets/pandey.jpg')}) }>
          <View style={{height: 250, width: 160, elevation: 10}}>
            <Image
              source={require('../Assets/pandey.jpg')}
              resizeMode="cover"
              style={{height: '100%', width: '100%', borderRadius: 8}}></Image>
          </View>
          <Text style={{textAlign: 'center'}}>Bachan Pandey</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{margin: 2}}
          onPress={() => navigation.navigate('MovieDetail' , {videoId:'Y9dr2zw-TXQ',
           poster:require('../Assets/ray.jpg')})}>
          <View style={{height: 250, width: 160, elevation: 10}}>
            <Image
              source={require('../Assets/ray.jpg')}
              resizeMode="cover"
              style={{height: '100%', width: '100%', borderRadius: 8}}></Image>
          </View>
          <Text style={{textAlign: 'center'}}>Ray</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{margin: 2}}
          onPress={() => navigation.navigate('MovieDetail' , {videoId:'Ruyl8_PT_y8', 
          poster:require('../Assets/kabirsingh.jpg')})}>
          <View style={{height: 250, width: 160, elevation: 10}}>
            <Image
              source={require('../Assets/kabirsingh.jpg')}
              resizeMode="cover"
              style={{height: '100%', width: '100%', borderRadius: 8}}></Image>
          </View>
          <Text style={{textAlign: 'center'}}>Kabir Singh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 2}}
          onPress={() => navigation.navigate('MovieDetail' , {videoId:'pWdKf3MneyI', 
          poster:require('../Assets/arya.jpg')})}>
          <View style={{height: 250, width: 160, elevation: 10}}>
            <Image
              source={require('../Assets/arya.jpg')}
              resizeMode="cover"
              style={{height: '100%', width: '100%', borderRadius: 8}}></Image>
          </View>
          <Text style={{textAlign: 'center'}}>Arya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MovieList = ({navigation}) => {
  return (
    <View style={{margin:15}}>
      <View style={{margin:6}}>
        <View style={{flex:1, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
          <Text style={{marginVertical:10, textTransform:'uppercase', fontWeight:'800'}}>Complete bollywood movies list 2022</Text>
          <Text>see all</Text>
        </View>
        <Text>
          lorem faiu fan ha nga kibga bab abg bakgb ahbg ahbg hab abkgb abg kabg
          kabgh akgb abg abwg bag abg abk gab abg kabg abg iabg ablb gag ag ablk
          gabg ab aklg a
        </Text>
      </View>
      <MoviePosters navigation= {navigation}/>
    </View>
  );
};
const RecentRelease = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <View style={{margin: 2}}>
      <Text style={{color: colors.text, fontSize:16, textTransform:'uppercase', marginHorizontal:20, marginVertical:10}}>Recent Release</Text>
      <MoviePosters navigation={navigation}></MoviePosters>
    </View>
  );
};


function MovieScreen({navigation}) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Calendar 2022" isHome={false} navigation={navigation} />
      <ScrollView>
      <View style={{marginHorizontal:10, marginVertical:10}}>
        <Text style={{fontSize:16, color:colors.text, textTransform:'uppercase', fontWeight:'900'}}>Calendar 2022</Text>
        <Text style={{color:colors.text }}>
          Lorems abfh afb ahkif afh iabg anogiu nag nabg oabn gan oabg
        </Text>
      </View>
      <View>
        <CalendarComp></CalendarComp>
      </View>
      <MoviePosters navigation={navigation} />
      <MovieList navigation={navigation}/>
      <RecentRelease navigation={navigation}/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'grey',
  },
  textClicked: {
    color: 'red',
  },
});

export default MovieScreen;

