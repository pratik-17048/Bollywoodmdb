import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
  
} from 'react-native';
import React from 'react';
import CustomHeader from '../Header/CustomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
const Data = [
  {
    id: '1',
    img: require('../Assets/ritik.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '2',
    img: require('../Assets/salman.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '3',
    img: require('../Assets/alia.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '4',
    img: require('../Assets/laxmi.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '5',
    img: require('../Assets/pankaj.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '6',
    img: require('../Assets/allu.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '7',
    img: require('../Assets/chris.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
];

const DataItem = ({description, uri}) => (
  <View style={{flex: 1, flexDirection: 'row', margin: 10,}}>
    <View style={{height: 120, width: 140, marginLeft: 5}}>
      <Image
        source={uri}
        style={{
          alignSelf: 'center',
          borderRadius: 10,
          height: '100%',
          width: '100%',
        }}
      />
    </View>
    <View
      style={{
        flexShrink: 1,
        overflow: 'hidden',
        height: 100,
        width: 210,
        marginLeft: 2,
      }}>
      <Text style={{flex: 1, overflow: 'hidden', marginLeft: 5}}>
        {description}
      </Text>
    </View>
  </View>
);
const Tags = ({navigation}) => {
  const renderItem = ({item}) => (
    <DataItem description={item.description} uri={item.img}></DataItem>
  );

  return (
    <SafeAreaView style={{marginTop: 20}}>

      <View>
        <CustomHeader title="Tags" isHome={false}
        navigation={navigation}/>
      </View>
      <Text style={{marginLeft: 15, fontSize: 20, fontWeight: '700'}}>
        Related Topics
      </Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id} style={{
          marginBottom:90
        }}></FlatList>
    </SafeAreaView>
  );
};

export default Tags;