import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height: 110, width: 200, marginVertical: 20}}>
        <Image
          source={require('../Assets/logobmdb.png')}
          style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        />
      </View>

      <TouchableOpacity style={styles.facebookBtn}>
        <View style={{height: 40, width: 40}}>
          <Image
            source={require('../Assets/facebook.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>

        <Text
          style={{
            width: 300,
            padding: 5,
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '500',
            color: 'white',
          }}>
          Login with Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <View style={{height: 40, width: 40}}>
          <Image
            source={require('../Assets/googles.png')}
            style={{height: '80%', width: '80%',margin:5}}
          />
        </View>

        <Text
          style={{
            width: 300,
            padding: 5,
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '500',
            color: 'white',
          }}>
          Login with Google
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{
            textDecorationLine: 'underline',
            fontSize: 15,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Skip for now
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  facebookBtn: {
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 10,
  },
  googleBtn: {
    backgroundColor: '#E58347',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 10,
  },
});

export default LoginScreen;
