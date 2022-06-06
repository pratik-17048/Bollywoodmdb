import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../Header/CustomHeader';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const Boxoffice = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View>
      <CustomHeader isHome={false} navigation={navigation} title="Box Office" />
      
      <ScrollView
        style={{marginVertical: 10}}
        showsVerticalScrollIndicator={false}>
        <Text style={{textTransform: 'capitalize', fontSize: 18 ,color:colors.text}}>
          bollywood Boxoffice collection report 2022-2021 report &amp; verdict
          india
        </Text>

        <Text style={{marginVertical: 10 , color:colors.text}}>
          Updated on: 30 May, 2022 18:13:49 (GMT)
        </Text>

        <TouchableOpacity
          style={{
            marginVertical: 5,
          }}
          onPress={() => navigation.navigate('BoxofficeReview')}>
          <View style={styles.cardContainer}>
            <View style={{height: 120, width: 100}}>
              <Image
                source={require('../Assets/endgame.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
              <Text style={[styles.cardheadline,colors.text]}>END GAME</Text>
              <Text style={[styles.cardText,colors.text]}>OPENING: 20.67CR</Text>
              <Text style={[styles.cardText,colors.text]}>WEEKEND:58.54CR</Text>
              <Text style={[styles.cardText,colors.text]}>FIRST WEEK:105.62CR</Text>
              <Text style={[styles.cardText,colors.text]}>TOTAL COLLECTION:197.6 CR</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text style={[styles.RatingBtn,colors.text]}>Super Hit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 5,
          }}
          onPress={() => navigation.navigate('BoxofficeReview')}>
          <View style={styles.cardContainer}>
            <View style={{height: 120, width: 100}}>
              <Image
                source={require('../Assets/sultan.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
            <Text style={[styles.cardheadline,colors.text]}>END GAME</Text>
              <Text style={[styles.cardText,colors.text]}>OPENING: 20.67CR</Text>
              <Text style={[styles.cardText,colors.text]}>WEEKEND:58.54CR</Text>
              <Text style={[styles.cardText,colors.text]}>FIRST WEEK:105.62CR</Text>
              <Text style={[styles.cardText,colors.text]}>TOTAL COLLECTION:197.6 CR</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text style={[styles.RatingBtn,colors.text]}>Super Hit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 5,
          }}
          onPress={() => navigation.navigate('BoxofficeReview')}>
          <View style={styles.cardContainer}>
            <View style={{height: 120, width: 100}}>
              <Image
                source={require('../Assets/antman.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
            <Text style={[styles.cardheadline,colors.text]}>END GAME</Text>
              <Text style={[styles.cardText,colors.text]}>OPENING: 20.67CR</Text>
              <Text style={[styles.cardText,colors.text]}>WEEKEND:58.54CR</Text>
              <Text style={[styles.cardText,colors.text]}>FIRST WEEK:105.62CR</Text>
              <Text style={[styles.cardText,colors.text]}>TOTAL COLLECTION:197.6 CR</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text style={[styles.RatingBtn,colors.text]}>Super Hit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 5,
          }}
          onPress={() => navigation.navigate('BoxofficeReview')}>
          <View style={styles.cardContainer}>
            <View style={{height: 120, width: 100}}>
              <Image
                source={require('../Assets/familyman.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
            <Text style={[styles.cardheadline,colors.text]}>END GAME</Text>
              <Text style={[styles.cardText,colors.text]}>OPENING: 20.67CR</Text>
              <Text style={[styles.cardText,colors.text]}>WEEKEND:58.54CR</Text>
              <Text style={[styles.cardText,colors.text]}>FIRST WEEK:105.62CR</Text>
              <Text style={[styles.cardText,colors.text]}>TOTAL COLLECTION:197.6 CR</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text style={[styles.RatingBtn,colors.text]}>Super Hit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 5,
          }}
          onPress={() => navigation.navigate('BoxofficeReview')}>
          <View style={styles.cardContainer}>
            <View style={{height: 120, width: 100}}>
              <Image
                source={require('../Assets/jer.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
            <Text style={[styles.cardheadline,colors.text]}>END GAME</Text>
              <Text style={[styles.cardText,colors.text]}>OPENING: 20.67CR</Text>
              <Text style={[styles.cardText,colors.text]}>WEEKEND:58.54CR</Text>
              <Text style={[styles.cardText,colors.text]}>FIRST WEEK:105.62CR</Text>
              <Text style={[styles.cardText,colors.text]}>TOTAL COLLECTION:197.6 CR</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text style={[styles.RatingBtn,colors.text]}>Super Hit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 5,
          }}
          onPress={() => navigation.navigate('BoxofficeReview')}>
          <View style={styles.cardContainer}>
            <View style={{height: 120, width: 100}}>
              <Image
                source={require('../Assets/extraction.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
            <Text style={[styles.cardheadline,colors.text]}>END GAME</Text>
              <Text style={[styles.cardText,colors.text]}>OPENING: 20.67CR</Text>
              <Text style={[styles.cardText,colors.text]}>WEEKEND:58.54CR</Text>
              <Text style={[styles.cardText,colors.text]}>FIRST WEEK:105.62CR</Text>
              <Text style={[styles.cardText,colors.text]}>TOTAL COLLECTION:197.6 CR</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text style={[styles.RatingBtn,colors.text]}>Super Hit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 5,
            marginBottom:38
            
          }}
          onPress={() => navigation.navigate('BoxofficeReview')}>
          <View style={styles.cardContainer} >
            <View style={{height: 120, width: 100}}>
              <Image
                source={require('../Assets/mib.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
            <Text style={[styles.cardheadline,colors.text]}>END GAME</Text>
              <Text style={[styles.cardText,colors.text]}>OPENING: 20.67CR</Text>
              <Text style={[styles.cardText,colors.text]}>WEEKEND:58.54CR</Text>
              <Text style={[styles.cardText,colors.text]}>FIRST WEEK:105.62CR</Text>
              <Text style={[styles.cardText,colors.text]}>TOTAL COLLECTION:197.6 CR</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text style={[styles.RatingBtn,colors.text]}>Super Hit</Text>
            </View>
          </View>
        </TouchableOpacity>
        
      </ScrollView>

      
    </View>
  );
};

export default Boxoffice;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  cardheadline: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  cardText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  RatingBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
    
  },
});
