import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import CustomHeader from '../Header/CustomHeader';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <CustomHeader title="Profile" isHome={false} navigation={navigation} />
      <ScrollView>
        <View>
          <Text style={styles.headerText}> Profile </Text>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../Assets/ritik.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              textTransform: 'capitalize',
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Hritik Roshan
          </Text>
        </View>

        <View style={{
          marginTop:15
        }}>

          <View style={{
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            borderRadius:4,

          }}>

            <View style={{
              justifyContent:'center',
              alignItems:'center',
              borderRadius:4,
              borderColor:'red',
              borderWidth:1,
              padding:10,
              margin:5,
            }}>

              <Text style={{fontSize:15}}>
                10
              </Text>

              <Text>
                Wached
              </Text>

            </View>

            <View style={{
              justifyContent:'center',
              alignItems:'center',
              borderRadius:4,
              borderColor:'red',
              borderWidth:1,
              padding:10,
              margin:5,
            }}>

<Text style={{fontSize:15}}>
                10
              </Text>

              <Text>
                Watching
              </Text>
            </View>

            <View style={{
              justifyContent:'center',
              alignItems:'center',
              borderRadius:4,
              borderColor:'red',
              borderWidth:1,
              padding:10,
              margin:5,
            }}>

              <Text style={{fontSize:15}}>
                10
              </Text>

              <Text>
                Wishlist
              </Text>

            </View>


          </View>



          {/*1 */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop:10,
            }}>
            <Image
              source={require('../Assets/allu.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/salman.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/akshay.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/mahesh.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />
          </View>

          {/*2 */}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Assets/tara.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/kiara.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/kat.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/alia.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />
          </View>

          {/* 3*/}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Assets/pankaj.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',

              }}
            />

            <Image
              source={require('../Assets/manoj.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/chris.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />

            <Image
              source={require('../Assets/tony.jpg')}
              style={{
                height: 100,
                width: 80,
                borderRadius: 8,
                marginVertical: 8,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity 
          style={{
            width:'90%',
            backgroundColor:'#D8392B',
            borderRadius:4,
            marginHorizontal:15,
            padding:5,
            marginTop:10,
            marginBottom:100

          
          }}
          >
            <Text style={{
              color:'white',
              textAlign:'center',
              fontSize:18,
              fontWeight:'bold',
            }}  onPress={() => navigation.navigate('Home')}>

              
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 2,
  },
});
export default ProfileScreen;
