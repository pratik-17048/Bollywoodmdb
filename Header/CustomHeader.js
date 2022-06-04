import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';

function CustomHeader({isHome, title}) {
  const navigation =  useNavigation();
  return (

      <View style={{flexDirection: 'row', height: 50, backgroundColor: '#D8392B'}}>
        <View style={{flexDirection: 'row', height: 50, marginHorizontal: 10}}>
          {isHome ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 5,
                  marginTop: 10,
                  tintColor: 'white',
                }}
                source={require('../Assets/menu.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.goBack()}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginHorizontal: 5,
                  tintColor: 'white',
                }}
                source={require('../Assets/back.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 1.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Text
            style={
              isHome
                ? {
                    flex: 1,
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600',
                  }
                : {
                    flex: 1,
                    textAlign: 'left',
                    marginLeft: 10,
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600',
                  }
            }>
            {title}
          </Text>

          {isHome ? (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                margin: 10,
              }}>
              <TouchableOpacity
                onPress={() =>  navigation.navigate('Login')}>
                <Image
                  source={require('../Assets/user.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: 'white',
                    marginLeft: 20,
                    marginRight: 5,
                  }}
                />
              </TouchableOpacity>

              <Image
                source={require('../Assets/notification.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'white',
                  marginLeft: 20,
                }}
              />

              <Image
                source={require('../Assets/search.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'white',
                  marginLeft: 30,
                }}
              />
            </View>
          ) : null}
        </View>
      </View>
  );
}

export default CustomHeader;
