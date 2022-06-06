import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeader from '../Header/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

const Events = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View >
        <ScrollView>
      <View>
        <CustomHeader
          title="Parties and Events"
          isHome={false}
          navigation={navigation}></CustomHeader>
      </View>

      <View style={{
          marginVertical:10,
          marginHorizontal:5,
      }}>
        <Text style={{
          marginVertical:5,
          fontWeight:'600'
      }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </Text>

        <Text style={{
          marginVertical:5,
      }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,

        </Text>

        <Text style={{
          marginVertical:5,
      }}>
            Updated on 30 March 2022 18:33:49PM (GMT)

        </Text>

        <Image   source={require('../Assets/party.jpg')}
        style={{
            height:300,
            width:'95%',
            marginHorizontal:10,
            borderRadius:8,
            
        }}
        />

        <Image source={require('../Assets/bolly.jpg')}
        
        style={{
            height:200,
            width:'95%',
            marginVertical:10,
            borderRadius:8,
            marginHorizontal:10,
            resizeMode:'contain'

            
        }}/>

        <Image source={require('../Assets/akp.jpg')}
        
        style={{
            height:350,
            width:'95%',
            marginVertical:10,
            borderRadius:8,
            marginHorizontal:10,
            resizeMode:'contain'

            
        }}/>

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
             
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: colors.text,
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: colors.text,
                  textAlign: 'center',
                }}>
            
                Read More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: colors.text,
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: colors.text,
                  textAlign: 'center',
                }}>
                
                Read More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: colors.text,
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: colors.text,
                  textAlign: 'center',
                }}>
                Read More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              
              style={{
                margin: 5,
                borderWidth: 1.5,
                borderColor: colors.text,
                borderRadius: 25,
                padding: 5,
                width: 115,
                height: 35,
              }}>
              <Text
                style={{
                  color: colors.text,
                  textAlign: 'center',
                }}>
                Read More
              </Text>
            </TouchableOpacity>
          </View>

        
      </View>

      </ScrollView>
    </View>
  );
};

export default Events;

