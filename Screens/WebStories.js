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
      celebName: 'Chris',
      img: require('../Assets/chris.jpg'),
     
    },
    {
      id: 2,
      celebName: 'Akshay Kumar',
      img: require('../Assets/akp.jpg'),
      
    },
    {
      id: 3,
      celebName: 'Tony Stark',
      img: require('../Assets/tony.jpg'),
      
    },
    {
      id: 4,
      celebName: 'Manoj Bajpayee',
      img: require('../Assets/manoj.jpg'),
     
    },
    {
      id: 5,
      celebName: 'Pankaj Tripathi',
      img: require('../Assets/pankaj.jpg'),
     
    },
    {
      id: 6,
      celebName: 'Salman Khan',
      img: require('../Assets/salman.jpg'),
     
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
  
  const WebStories = ({navigation}) => {
    const {colors} = useTheme();
    return (
      <View style={{marginBottom:50}}>
        <CustomHeader
          title="WebStories"
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
           WebStories
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
                
              <TouchableOpacity 
              onPress={()=> navigation.navigate('Stories')}
              >
              <Image
                source={element.img}
                style={{
                  height: 220,
                  width: 160,
                  overflow: 'hidden',
                  borderRadius: 5,
                 
                }} 
                
                >
                
              </Image>
            </TouchableOpacity>
  
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      fontSize:15,
                      textAlign:'center',
                      color:colors.text,
                      fontWeight:'800',
                      
                      
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
  
  export default WebStories;
  