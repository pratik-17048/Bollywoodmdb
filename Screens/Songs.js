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
    songName: 'Shrivali',
    img: require('../Assets/shrivali.jpg'),
    songId: 'P2KRKxAb2ek',
  },
  {
    id: 2,
    songName: 'Bad Boy',
    img: require('../Assets/badboy.jpg'),
    songId: 'dx4Teh-nv3A',
  },
  {
    id: 3,
    songName: 'Marjawaan',
    img: require('../Assets/bell.jpg'),
    songId: 'RHuMV3R9M4w',
  },
  {
    id: 4,
    songName: 'Rehnuma',
    img: require('../Assets/heropanti.jpg'),
    videoId: 'aShXYv90J9o',
  },
  {
    id: 5,
    songName: 'Bekhayali',
    img: require('../Assets/kabirsong.jpg'),
    videoId: 'bhVH0C-6f8Q',
  },
  {
    id: 6,
    songName: 'Zindagi',
    img: require('../Assets/zindagi.jpg'),
    songId: 'I6tkuhDCOW0',
  },
  {
    id: 7,
    songName: 'Shrivali',
    img: require('../Assets/shrivali.jpg'),
    songId: 'hcMzwMrr1tE',
  },
  {
    id: 8,
    songName: 'Namo Namo',
    img: require('../Assets/namo.jpg'),
    songId: 'dx4Teh-nv3A',
  },
  {
    id: 9,
    songName: 'Marjawaan',
    img: require('../Assets/bell.jpg'),
    songId: 'RHuMV3R9M4w',
  },
  {
    id: 10,
    songName: 'Rehnuma',
    img: require('../Assets/heropanti.jpg'),
    videoId: 'aShXYv90J9o',
  },
  {
    id: 11,
    songName: 'Bekhayali',
    img: require('../Assets/kabirsong.jpg'),
    videoId: 'bhVH0C-6f8Q',
  },
  {
    id: 12,
    songName: 'Zindagi',
    img: require('../Assets/zindagi.jpg'),
    songId: 'I6tkuhDCOW0',
  },
  
  
];

const Songs = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={{marginBottom: 50}}>
      <CustomHeader
        title="Songs"
        isHome={false}
        navigation={navigation}
      />

      <ScrollView
        style={{marginHorizontal: 5}}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 10,
          }}>
          Lastest Songs 2022
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
                  navigation.navigate('', {
                    videoId: `${element.videoId}`,
                  })
                }>
                <View>
                  <ImageBackground
                    source={element.img}
                    style={{
                      height: 100,
                      width: 170,
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
                    textAlign:'center'
                  }} >
                  {element.songName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Songs;
