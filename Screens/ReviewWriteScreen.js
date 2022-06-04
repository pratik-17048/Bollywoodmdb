import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import CustomHeader from '../Header/CustomHeader';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const ReviewWriteScreen = () => {
  return (
    <View>
      <View>
        <CustomHeader title={'Write Reviews'} isHome={false} />
      </View>

      <ScrollView>

      <View style={{
        marginHorizontal:6,
        marginVertical:6,
      }}>
        <Text style={{
          fontSize:18,
          fontWeight:'700',
          
        }}>Write a Review</Text>
        <Text style={{
          fontSize:16,
          marginTop:7

        }}>Your review is awaiting moderation</Text>
        <Text style={{
          fontSize:14,
          marginTop:7
        }}>Please enter mandatory fields</Text>

        <Text style={{
          fontSize:18,
          color:'white',
          marginVertical:5
        }}>Full Name</Text>

        <TextInput placeholder="Enter Name" 
        style={{
          borderWidth:1,
          borderColor:'grey'
        }}></TextInput>

        <Text style={{
          fontSize:18,
          color:'white',
          marginVertical:5
        }}>Email address</Text>

        <TextInput placeholder="Enter Email"
         style={{
          borderWidth:1,
          borderColor:'grey'
          
        }}
        ></TextInput>

        <Text style={{
          fontSize:18,
          color:'white',
          marginVertical:5
        }}>Review</Text>

        <TextInput
          placeholder="Write Your Review here..."
          multiline={true}
          numberOfLines={6}
          style={{
            borderWidth:1,
            borderColor:'grey',
            textAlignVertical:'top'
            

          }}
          ></TextInput>
        <View
          style={{
            backgroundColor: '#D8392B',
            height: 40,
            width: '90%',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            marginVertical:10
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              color: 'white',
              fontWeight: '500',
             
            }} onPress={()=> Alert.alert('Your Review Submitted Succesfully')}>
            Submit Review

          </Text>
        </View>

        <Text style={{
          fontSize:18,
          color:'white',
          marginVertical:5
        }}>User Reviews</Text>
        <View style={{
          borderWidth:1,
          borderColor:'grey',
          marginHorizontal:5,
          marginVertical:10,
        }} >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal:10
             
            }}>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>Praveen Kulkarni</Text>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>10 Hours ago</Text>
          </View>

          <Text style={{
            fontSize:15,
            marginHorizontal:10
           
            
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </View>

        <View style={{
          borderWidth:1,
          borderColor:'grey',
          marginHorizontal:5
        }} >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal:10
             
            }}>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>Rahul Kumar</Text>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>13 Hours ago</Text>
          </View>

          <Text style={{
            fontSize:15,
            marginHorizontal:10
           
            
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </View>

        <View style={{
          borderWidth:1,
          borderColor:'grey',
          marginHorizontal:5
        }} >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal:10
             
            }}>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>Sachin Patil</Text>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>18 Hours ago</Text>
          </View>

          <Text style={{
            fontSize:15,
            marginHorizontal:10
           
            
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </View>

        <View style={{
          borderWidth:1,
          borderColor:'grey',
          marginHorizontal:5
        }} >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal:10
             
            }}>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>Neha Pawar</Text>
            <Text style={{
          fontSize:18,
          color:'grey',
          marginVertical:5
        }}>23 Hours ago</Text>
          </View>

          <Text style={{
            fontSize:15,
            marginHorizontal:10
           
            
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </View>
      </View>

      </ScrollView>

      
    </View>
  );
};

export default ReviewWriteScreen;

const styles = StyleSheet.create({});
