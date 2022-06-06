import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import CustomHeader from '../Header/CustomHeader';
import { useTheme } from '@react-navigation/native';

const BoxofficeReview = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View>
      <CustomHeader
        title="Moview Review Details"
        isHome={false}
        navigation={navigation}
      />

      <ScrollView style={{marginHorizontal: 12, marginVertical: 10}}>
        <View>
          <Text style={[styles.headlineText,colors.text]}>
            Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem
            Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब
            एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई.
          </Text>
          <Text style={[styles.contentText,colors.text]}>
            यह एक लंबा स्थापित तथ्य है कि जब एक पाठक एक पृष्ठ के खाखे को देखेगा
            तो पठनीय सामग्री से विचलित हो जाएगा. Lorem Ipsum का उपयोग करने का
            मुद्दा यह है कि इसमें एक और अधिक या कम अक्षरों का सामान्य वितरण किया
            गया है, 'Content here, content here' प्रयोग करने की जगह इसे पठनीय
            English के रूप में प्रयोग किया जाये. अब कई डेस्कटॉप प्रकाशन संकुल और
            वेब पेज संपादक उनके डिफ़ॉल्ट मॉडल पाठ के रूप में
          </Text>
        </View>

        <View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../Assets/mib.jpg')}
              style={{height: '100%', width: '100%',
               borderRadius: 5,resizeMode:'contain'}}
            />
          </View>

          <View style={styles.HorizontalContainer}>
            <View style={styles.leftIconContainer}>
              <View style={styles.iconContainer}>
                <Image
                  style={{height: 23, width: 23, marginHorizontal: 7}}
                  source={require('../Assets/facebook.png')}
                />
                <Image
                  style={{height: 23, width: 23, marginHorizontal: 7}}
                  source={require('../Assets/twitter.png')}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../Assets/star.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: colors.notification,
                  marginHorizontal: 6,
                }}
              />
              <Text>4.7/5</Text>
            </View>
          </View>
        </View>

        <View style={styles.creditContainer}>
          <View>
            <Text style={styles.textDark}> Movie Credits:</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}> Banner:</Text>
            <Text style={{fontWeight: '500', color: 'grey', lineHeight: 25}}>
              Red Chillies Entertainment, Drishyam Films
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}> Director:</Text>
            <Text style={{fontWeight: '500', color: 'grey', lineHeight: 25}}>
              Shankar Raman
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}> Cast:</Text>
            <Text style={{fontWeight: '500', color: 'grey', lineHeight: 25}}>
              Vikrant Massey, Pankaj Tripathi, Sonu Sood, etc
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}> Platform:</Text>
            <Text style={{fontWeight: '500', color: 'grey', lineHeight: 25}}>
              Netflix
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}> Runtime:</Text>
            <Text style={{fontWeight: '500', color: 'grey', lineHeight: 25}}>
              280 Minutes
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              color: 'white',
            }}>
            love hostel movie review rating:4/5
          </Text>
          <Text style={{color:colors.text}}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </View>

        <View>
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Story
          </Text>

          <Text style={{color: colors.text}}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </View>

        <View>
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Highs
          </Text>

          <Text style={{color: colors.text}}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </View>

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

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{color: colors.text, marginVertical: 10, textAlign: 'center'}}>
            Keep visting BollywoodMDB.com for more exciting updates!
          </Text>
        </View>

        <View style={{marginBottom: 60}}>
          <Text style={{marginVertical: 10, fontSize: 15, fontWeight: '500'}}>
            Watch Movie Trailer:
          </Text>
          <View>
            <ImageBackground
              source={require('../Assets/harry.jpg')}
              style={{
                height: 200,
                width: '100%',
                overflow: 'hidden',
                borderRadius: 8,
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
                <Text
                  onPress={() => Alert.alert('Video Player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../Assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BoxofficeReview;

const styles = StyleSheet.create({
  headlineText: {
    marginVertical: 5,
    fontWeight: '600',
    fontSize: 17,
  },
  contentText: {
    marginVertical: 5,
    fontWeight: '400',
    fontSize: 13,
  },
  imgContainer: {
    height: 200,
    fontWeight: '100%',
    marginVertical: 12,
  },
  HorizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  leftIconContainer:{
      flex:2
  },
  textDark:{
      fontWeight:'600',
      lineHeight:25,
      marginHorizontal:5,
  }
});
