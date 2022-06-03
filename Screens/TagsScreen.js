import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  
} from 'react-native';
import React from 'react';
import CustomHeader from '../Header/CustomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

const Data = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    img: require('../Assets/akshay.jpg'),
  },
  {
    id: 2,
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    img: require('../Assets/akshay.jpg'),
  },
  {
    id: 3,
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    img: require('../Assets/akshay.jpg'),
  },
  {
    id: 4,
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    img: require('../Assets/akshay.jpg'),
  },
  {
    id: 5,
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    img: require('../Assets/akshay.jpg'),
  },
  {
    id: 6,
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    img: require('../Assets/akshay.jpg'),
  },
  {
    id: 7,
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    img: require('../Assets/akshay.jpg'),
  },
];

const ShowDetail = (item, navigation) => {
  return (
    <TouchableOpacity   style={styles.ViewContainer}
    onPress={() => navigation.navigate('NewsDetail', item)}>
      <View style={styles.itemImgContainer}>
        <Image
          source={item.img}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
      </View>

      <View
        style={{
          flexShrink: 1,
          height: 100,
          width: 210,
          marginLeft: 2,
          overflow: 'hidden',
        }}>
        <Text style={{flex: 1, overflow: 'hidden'}}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
      };

function TagsScreen({navigation}) {
  const renderItem = ({item}) => {
    <ShowDetail navigation={navigation} item={item}></ShowDetail>;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Tags" isHome={false} navigation={navigation} />
      <Text style={styles.headerText}> Article </Text>
      
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}>
          
        </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemImgContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  Sectionimg: {
    width: 140,
    height: 100,
  },
  ViewContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 2,
  },
});

export default TagsScreen;
