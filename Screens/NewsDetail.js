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
import {ScrollView} from 'react-native-gesture-handler';

const Data = [
  
      {
        id: 1,
        img: require('../Assets/antman.jpg'),
        description:
        'Lorem Ipsum has been the industrys standard dummy text,ever since the 1500s, when an unknown printer took a galley of type',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 2,
        img: require('../Assets/chris.jpg'),
        description:
        'Lorem Ipsum has been the industrys standard dummy text,ever since the 1500s, when an unknown printer took a galley of type',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 3,
        img: require('../Assets/irishman.jpg'),
        description:
        'Lorem Ipsum has been the industrys standard dummy text,ever since the 1500s, when an unknown printer took a galley of type',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 4,
        img: require('../Assets/ritik.jpg'),
        description:
        'Lorem Ipsum has been the industrys standard dummy text,ever since the 1500s, when an unknown printer took a galley of type',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 5,
        img: require('../Assets/mib.jpg'),
        description:
        'Lorem Ipsum has been the industrys standard dummy text,ever since the 1500s, when an unknown printer took a galley of type',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 6,
        img: require('../Assets/blackpanther.jpg'),
        description:
        'Lorem Ipsum has been the industrys standard dummy text,ever since the 1500s, when an unknown printer took a galley of type',
        date: 'March 24,2022 1:20 IST',
      },
      {
        id: 7,
        img: require('../Assets/akshay.jpg'),
        description:
        'Lorem Ipsum has been the industrys standard dummy text,ever since the 1500s, when an unknown printer took a galley of type',
        date: 'March 24,2022 1:20 IST',
      },
    ];
  


const DetailItem = ({description, images}) => (
  <View style={styles.ViewContainer}>
    <View style={styles.itemImgContainer}>
      <Image
        source={images}
        style={{
          height: '100%',
          width: '100%',
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
      <Text style={{flex: 1, overflow: 'hidden'}}>{description}</Text>
    </View>
  </View>
);

const RelatedTopic = () => {
  const renderItem = ({item}) => (
    <DetailItem description={item.description} images={item.img}></DetailItem>
  );

  return (
    <SafeAreaView style={{marginTop: 18}}>
      <Text style={styles.headerText}>Related Topic</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

const NewsDetail = ({navigation, route}) => {
  const {id, img} = route.params
  return (
    <View>
      <CustomHeader navigation={navigation} title="Review Details" />
      <ScrollView>
        <View style={{marginHorizontal:12}}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '700',
              color: 'grey',
              marginTop: 10,
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <Text style={{fontSize: 16, color: 'grey', marginTop: 10, marginVertical:10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <View style={{height: 200, width: '98%'}}>
            <Image
              source={img}
              style={{height: '100%', width: '100%', borderRadius: 7}}
            />
            <Text
              style={{
                marginVertical: 5,
                color: 'maroon',
                position: 'absolute',
                left: 20,
              }}>
              {`id : ${id}`}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginVertical: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontWeight: 'bold'}}>By Bollywood</Text>

              <Text style={{fontSize: 12, fontWeight: '600'}}>
                Updated on 21 May 2021
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/facebook.png')}
                style={{height: 25, width: 25, marginLeft: 5}}
              />

              <Image
                source={require('../Assets/twitter.png')}
                style={{height: 25, width: 25, marginLeft: 5}}
              />
            </View>
          </View>

          <Text style={{fontSize:18,color:'white',lineHeight:25}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          </View>

          <View
            style={{
              marginHorizontal: 12,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tags')}
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: 'white',
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
            
                Read More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Tags')}
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: 'white',
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                
                Read More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Tags')}
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: 'white',
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                Read More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Tags')}
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: 'white',
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                Read More
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 60}}>
            <RelatedTopic> </RelatedTopic>
          </View>
          </ScrollView>
        </View>
     
  );
};



const styles = StyleSheet.create({
    itemImgContainer: {
      flex: 1,
      marginRight: 5,
      resizeMode:'cover',
      height:150,
      width:110,
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
    }
  });

export default NewsDetail;
