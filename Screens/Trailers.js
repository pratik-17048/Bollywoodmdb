import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../Header/CustomHeader';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    movieName: 'bhool bhulaiyaa',
    img: require('../Assets/bb2.jpg'),
    videoId: 'P2KRKxAb2ek',
  },
  {
    id: 2,
    movieName: 'Bachan Pandey',
    img: require('../Assets/pandey.jpg'),
    videoId: 'cpNaGiBhXiM',
  },
  {
    id: 3,
    movieName: 'Kabir Singh',
    img: require('../Assets/kabirsingh.jpg'),
    videoId: 'RiANSSgCuJk',
  },
  {
    id: 4,
    movieName: 'Family Man',
    img: require('../Assets/familyman.jpg'),
    videoId: 'XatRGut65VI',
  },
  {
    id: 5,
    movieName: 'Harry Potter',
    img: require('../Assets/harry.jpg'),
    videoId: 'VyHV0BRtdxo',
  },
  {
    id: 6,
    movieName: 'Panchayat',
    img: require('../Assets/pan.jpg'),
    videoId: 'vG1614YSCPk',
  },
  {
    id: 7,
    movieName: 'Mirzapur',
    img: require('../Assets/mir.jpg'),
    videoId: 'xMKzdQrC5TI',
  },
  {
    id: 8,
    movieName: 'Ray',
    img: require('../Assets/ray.jpg'),
    videoId: 'P0P_Sfju0-Q',
  },
  {
    id: 9,
    movieName: 'Arya',
    img: require('../Assets/arya.jpg'),
    videoId: 'ZYajW2ePmFQ',
  },
  {
    id: 10,
    movieName: 'Inside Edge',
    img: require('../Assets/inside.jpg'),
    videoId: 'ZHVMQEy56wc',
  },
];

const Trailers = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={{marginBottom:50}}>
      <CustomHeader
        title="Movie Trailers"
        isHome={false}
        navigation={navigation}
      />

      <ScrollView
        style={{marginHorizontal: 10}}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 10,
          }}>
          Lastest Movie Trailers 2022
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: 10,
          }}>
          {data.map(element => {
            return (
              <TouchableOpacity
                key={element.id}
                style={{
                  margin: 10,
                }}
                onPress={() =>
                  navigation.navigate('VideoPlayer', {
                    videoId: `${element.videoId}`,
                  })
                }>
              
            <View>
            <ImageBackground
              source={element.img}
              style={{
                height: 150,
                width: 160,
                overflow: 'hidden',
                borderRadius: 5,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
               
                  <Image
                    source={require('../Assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
              
              </View>
            </ImageBackground>
          </View>

                <Text
                  style={{
                    textTransform: 'capitalize',
                    color:colors.text
                  }}>
                  {element.movieName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Trailers;
