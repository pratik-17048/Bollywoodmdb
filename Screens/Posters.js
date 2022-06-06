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
      celebName: 'Bhool Bhulaiya',
      img: require('../Assets/bb2.jpg'),
     
    },
    {
      id: 2,
      celebName: 'Ant Man',
      img: require('../Assets/antman.jpg'),
      
    },
    {
      id: 3,
      celebName: 'End Game',
      img: require('../Assets/endgame.jpg'),
      
    },
    {
      id: 4,
      celebName: 'Black Panther',
      img: require('../Assets/blackpanther.jpg'),
     
    },
    {
      id: 5,
      celebName: 'Mirzapur',
      img: require('../Assets/mir.jpg'),
     
    },
    {
      id: 6,
      celebName: 'Laxmi',
      img: require('../Assets/laxmi.jpg'),
     
    },
    {
      id: 7,
      celebName: 'Allu Arjun',
      img: require('../Assets/allu.jpg'),
    
    },
    {
      id: 8,
      celebName: 'Kiara Advani',
      img: require('../Assets/kiara.jpg'),

    },
    {
      id: 9,
      celebName: 'Katrina Kaif',
      img: require('../Assets/kat.jpg'),

    },
    {
      id: 10,
      celebName: 'Alia Bhatt',
      img: require('../Assets/alia.jpg'),
     
    },
  ];
  
  const Posters = ({navigation}) => {
    const {colors} = useTheme();
    return (
      <View style={{marginBottom:50}}>
        <CustomHeader
          title="Posters"
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
           Posters
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
                      fontWeight:'600',
                      
                      
                    }}>
                    {element.celebName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default Posters;
  