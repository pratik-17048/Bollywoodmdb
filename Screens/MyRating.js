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
     
    },
    {
      id: 2,
      movieName: 'Bachan Pandey',
      img: require('../Assets/pandey.jpg'),
     
    },
    {
      id: 3,
      movieName: 'Kabir Singh',
      img: require('../Assets/kabirsingh.jpg'),
      
    },
    {
      id: 4,
      movieName: 'Family Man',
      img: require('../Assets/familyman.jpg'),
      
    },
    {
      id: 5,
      movieName: 'Harry Potter',
      img: require('../Assets/harry.jpg'),
      
    },
    {
      id: 6,
      movieName: 'Panchayat',
      img: require('../Assets/pan.jpg'),
      
    },
    {
      id: 7,
      movieName: 'Mirzapur',
      img: require('../Assets/mir.jpg'),
      
    },
    {
      id: 8,
      movieName: 'Ray',
      img: require('../Assets/ray.jpg'),
      
    },
    {
      id: 9,
      movieName: 'Arya',
      img: require('../Assets/arya.jpg'),
      
    },
    {
      id: 10,
      movieName: 'Inside Edge',
      img: require('../Assets/inside.jpg'),
      
    },
  ];
  
  const MyRating = ({navigation}) => {
    const {colors} = useTheme();
    return (
      <View style={{marginBottom:50}}>
        <CustomHeader
          title="Ratings"
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
           Ratings
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
                 >
                
              <View>
              <Image
                source={element.img}
                style={{
                  height: 220,
                  width: 160,
                  overflow: 'hidden',
                  borderRadius: 5,
                 
                }}>
                
              </Image>
            </View>
  
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      fontSize:15,
                      textAlign:'center',
                      color:colors.text,
                      fontWeight:'700',
                      
                      
                    }}>
                    {element.movieName}
                  </Text>

                  <View style={{flexDirection:'row',alignItems:'center',
                justifyContent:'center'}}>
                      <Image source={require('../Assets/star.png')}
                      
                      style={{tintColor:'red',height:15,width:15}}
                      
                      />

                      <Text style={{fontWeight:'500',color:colors.text}}>
                          4.5/5.0
                      </Text>

                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default MyRating;
  