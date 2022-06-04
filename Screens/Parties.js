import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../Header/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const Data = [
  
      {
        id: 1,
        img: require('../Assets/antman.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 2,
        img: require('../Assets/chris.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 3,
        img: require('../Assets/irishman.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 4,
        img: require('../Assets/ritik.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 5,
        img: require('../Assets/mib.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 6,
        img: require('../Assets/blackpanther.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 7,
        img: require('../Assets/akshay.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        date: 'March 24,2022 1:20 IST',
      },
    ];
  


const DetailSection = ({item,navigation}) => {  
  return(
  <TouchableOpacity
    style={styles.ViewContainer}
    onPress={() => navigation.navigate('Events', item)}>
    <View style={styles.itemImgContainer}>
    
        <Image
          source={item.img}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
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
        <Text style={{flex: 1, overflow: 'hidden'}}>{item.description}</Text>

        <Text style={{marginTop: 10}}>{item.date}</Text>
      </View>
  </TouchableOpacity>
  );
};

const Parties=({navigation}) => { 
  const renderItem = ({item}) => (
    <DetailSection navigation={navigation} item={item}></DetailSection>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Parties and Events" isHome={false} navigation={navigation} />
      <Text style={styles.headerText}> Parties and Events </Text>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
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
  headerText:{
    textTransform:'uppercase',
    fontSize:18,
    fontWeight:'bold',
    marginHorizontal:10,
    marginVertical:2,
  
  },
});

export default Parties;
