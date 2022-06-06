import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  StyleSheet,
  ImageBackground,
  SectionList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../Header/CustomHeader';
import DropDown from '../DropDown/DropDown';

const SomeData = [
  {
    title: 'Bollywood',
    data: [
      {
        img: require('../Assets/bb2.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
      {
        img: require('../Assets/laxmi.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
    ],
  },
  {
    title: 'Television',
    data: [
      {
        img: require('../Assets/london.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
      {
        img: require('../Assets/mib.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
    ],
  },
  {
    title: 'Web Series',
    data: [
      {
        img: require('../Assets/blackpanther.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
      {
        img: require('../Assets/endgame.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
    ],
  },
  {
    title: 'Fashion',
    data: [
      {
        img: require('../Assets/bb2.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
      {
        img: require('../Assets/london.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
    ],
  },
  {
    title: 'South',
    data: [
      {
        img: require('../Assets/laxmi.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
      {
        img: require('../Assets/irishman.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
    ],
  },
  {
    title: 'International',
    data: [
      {
        img: require('../Assets/moneyheist.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
      {
        img: require('../Assets/blackpanther.jpg'),
        description:
          'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
        oneLiner: 'venenatis velit',
      },
    ],
  },
];

const HorizontalScroll = () => {
  const {colors} = useTheme()
  return (
    <ScrollView horizontal={true}>
      <View style={styles.HorizontalContainer}>
        <ImageBackground
          source={require('../Assets/allu.jpg')}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 8,
            
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderRadius: 17,
            }}>
            <View style={{backgroundColor: 'black',opacity: 0.6, margin: 5}}>
              <Text style={{color: colors.background }}>
                Donec aliquam, magna non cursus lacinia, sit amet hendrerit
                ipsum elit vitae nisi.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.HorizontalContainer}>
        <ImageBackground
          source={require('../Assets/salman.jpg')}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 8,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderRadius: 17,
            }}>
            <View style={{backgroundColor: 'black', opacity: 0.6, margin: 5}}>
              <Text style={{color: colors.background} }>
                Donec aliquam, magna non cursus lacinia, sit amet hendrerit
                ipsum elit vitae nisi.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const SectionDetail = ({item}) => {
  const {colors} = useTheme()
  return (
    <View style={styles.itemImgContainer}>
      <View style={styles.Sectionimg}>
        <Image
          source={item.img}
          style={{
            alignSelf: 'center',
            borderRadius: 10,
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <View
        style={{
          flexShrink: 1,
          overflow: 'hidden',
          height: 100,
          width: 210,
          marginLeft: 2,
        }}>
        <Text style={{color: colors.text} }>{item.description}</Text>

        <Text style={{marginTop: 7,color: colors.text}} >{item.oneLiner}</Text>
      </View>
    </View>
  );
};

const BottomComponent = () => {
  const {colors} = useTheme();
  const renderSectionDetails = ({item}) => {
    return <SectionDetail item={item}></SectionDetail>;
  };

  const sectionStoryhandler = () => {
    navigation.navigate('');
  };
  return (
    <SectionList
      sections={SomeData}
      renderItem={renderSectionDetails}
      renderSectionHeader={({section}) => {
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={[styles.sectionHeader, {color: colors.text}]}>
            {section.title}
          </Text>
          <Text onPress={sectionStoryhandler}   style={{color: colors.text}}>see all</Text>
        </View>;
      }}></SectionList>
  );
};


const more = [
  {id: 2, name: 'Celebrities', Route: 'Celebrities'},
  {id: 1, name: 'Aboutus', Route: 'Aboutus'},
];
const videos = [
  {id: 1, name: 'Trailers', Route: 'Trailers'},
  {id: 2, name: 'Songs', Route: 'Songs'},
];
const movies = [
  {id: 1, name: 'Movies', Route: 'Movies'},
  {id: 2, name: 'WatchList', Route: 'WatchList'},
];
const reviews = [
  {id: 1, name: 'Reviews', Route: 'Reviews'},
  {id: 2, name: 'MyRatings', Route: 'MyRating'},
];

const HeaderBtn = ({navigation}) => {
  const {colors} = useTheme()
  const [selectedItem, SetSelectedItem] = React.useState(null);
  const onSelect = item => {
    navigation.navigate(`${item.Route}`);
    SetSelectedItem(item);
  };
  return (
    <View style={{marginHorizontal: 10}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <Text onPress={() => navigation.navigate('Home')} style={{color: colors.text}}>Home</Text>
        </View>

        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 5,
          }}>
          <Text onPress={() => navigation.navigate('NewsAdda')} style={{color: colors.text}}>News Adda</Text>
        </View>
        
        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <DropDown
            fruits={videos}
            onSelect={onSelect}
           
            defaultTitle="Videos"
            style={{color:colors.text}}
          />
        </View>
        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <DropDown
            fruits={movies}
            onSelect={onSelect}
           style={{color:colors.text}}
            defaultTitle="Movies"
          />
        </View>

        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <Text onPress={() => navigation.navigate('Boxoffice')} style={{color: colors.text}}>
            Box Office
          </Text>
        </View>
        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <DropDown
            fruits={reviews}
            onSelect={onSelect}
           
            defaultTitle="Reviews"
          />
        </View>

        <View
          style={{marginHorizontal: 12, marginVertical: 5, marginRight: 50}}>
          <DropDown
            fruits={more}
            onSelect={onSelect}
            value={selectedItem}
            defaultTitle="More"
          />
        </View>
        
      </ScrollView>
    </View>
  );
};

const WebStories = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View style={{marginHorizontal: 12}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color:colors.text,
          }}>
          WebStories
        </Text>
        <Text onPress={() => navigation.navigate('WebStories')} style={{color: colors.text}}>see all</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WebStories')}
            style={{
              borderColor: '#696969',
              borderRadius: 5,
              borderWidth: 1,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../Assets/kiara.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>

            <Text style={{padding: 5,color: colors.text}}>
              lorem ipsm dolor sit amet , consetector
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WebStories')}
            style={{
              borderColor: '#696969',
              borderRadius: 5,
              borderWidth: 1,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../Assets/akshay.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>

            <Text style={{padding: 5 ,color:colors.text }} >
              lorem ipsm dolor sit amet , consetector
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WebStories')}
            style={{
              borderColor: '#696969',
              borderRadius: 5,
              borderWidth: 1,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../Assets/salman.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>

            <Text style={{padding: 5 , color:colors.text}}>
              lorem ipsm dolor sit amet , consetector
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WebStories')}
            style={{
              borderColor: '#696969',
              borderRadius: 5,
              borderWidth: 1,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../Assets/allu.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>

            <Text style={{padding: 5 , color:colors.text}} >
              lorem ipsm dolor sit amet , consetector
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

function HomeScreen({navigation}) {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <ScrollView>
        <View style={{marginTop: 8}}>
          <HeaderBtn navigation={navigation} />
        </View>

        <View style={styles.HeaderLine}></View>
        <Text
          style={{
            color: colors.text,
            fontSize: 17,
            textTransform: 'capitalize',
            fontWeight: '700',
            marginBottom: 15,
            marginLeft: 25,
          }}>
          Trending
        </Text>

        <View style={{marginHorizontal: 10}}>
          <View style={styles.imgContainer}>
            <ImageBackground
              source={require('../Assets/tony.jpg')}
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                imageStyle={{borderRadius: 18}}>
                <View
                  style={{
                   backgroundColor:'black',
                    opacity: 0.6,
                    margin: 5,
                  }}>
                  <Text style={{color:colors.background}}>
                    Proin facilisis felis ac magna egestas imperdiet, Vivamus
                    sit amet augue odio. Integer ullamcorper ex eros.
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 12}}>
          <View style={styles.imgContainer2}>
            <Image
              source={require('../Assets/chris.jpg')}
              style={{
                borderRadius: 16,
                alignSelf: 'center',
                height: '100%',
                width: '100%',
                
              }}
            />
          </View>
        </View>

        <HorizontalScroll />
        <View>
          <BottomComponent />
        </View>
        <View>
          <WebStories navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 5,
  },
  HeaderLine: {
    width: '90%',
    height: 1,
    backgroundColor: 'grey',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  imgContainer: {
    height: 500,
    width: 370,
  },
  imgContainer2: {
    height: 250,
    width: 370,
  },
  HorizontalContainer: {
    height: 300,
    width: 370,
    marginHorizontal: 8,
    marginVertical: 12,
  },
  sectionHeader: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '900',
  },
  itemImgContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  Sectionimg: {
    width: 140,
    height: 100,
  },
});
export default HomeScreen;
