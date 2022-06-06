import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import CustomHeader from '../Header/CustomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

const cast = [
  {
    id: 1,
    img: require('../Assets/akp.jpg'),
    name: 'Akshay',
  },
  {
    id: 2,
    img: require('../Assets/alia.jpg'),
    name: 'Alia',
  },
  {
    id: 3,
    img: require('../Assets/mahesh.jpg'),
    name: 'Mahesh ',
  },
  {
    id: 4,
    img: require('../Assets/salman.jpg'),
    name: 'Salman ',
  },

  {
    id: 5,
    img: require('../Assets/kat.jpg'),
    name: 'Katrina',
  },
  {
    id: 6,
    img: require('../Assets/allu.jpg'),
    name: 'Allu',
  },
];

const CastList = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 12,
          marginVertical: 10,
          justifyContent: 'space-between',
        }}>
        <Text>Cast and Crew</Text>

        <Text>see all</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cast.map(element => {
          return (
            <TouchableOpacity
              key={element.id}
              onPress={() => navigation.navigate('StarCast')}>
              <Image
                source={element.img}
                style={{
                  height: 120,
                  width: 80,
                  borderRadius: 8,
                  marginHorizontal: 5,
                  marginVertical: 4,
                }}></Image>

              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 14, fontWeight: '600', margin: 3}}>
                  {element.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Data = [
  {
    id: '1',
    img: require('../Assets/pandey.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '2',
    img: require('../Assets/laxmi.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '3',
    img: require('../Assets/bb2.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '4',
    img: require('../Assets/badboy.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
];

const DataItem = ({description, uri}) => (
  <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
    <View style={{height: 120, width: 140, marginLeft: 5}}>
      <Image
        source={uri}
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
      <Text style={{flex: 1, overflow: 'hidden', marginLeft: 5}}>
        {description}
      </Text>
    </View>
  </View>
);
const RelatedTopics = ({navigation}) => {
  const renderItem = ({item}) => (
    <DataItem description={item.description} uri={item.img}></DataItem>
  );

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
      }}>
      <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '700'}}>
        Related Topics
      </Text>
      <Text onPress={()=> navigation.navigate('NewsAdda')}>
        See all
      </Text>
      </View>
     
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

const LatestMovies = () => {
  const {colors} = useTheme()
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          marginHorizontal: 5,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 17, fontWeight: '700'}}>Videos</Text>
        <Text>see all</Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}
              source={require('../Assets/pan.jpg')}>
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
                <Text>
                  <Image
                    source={require('../Assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text
              style={{textAlign: 'center', justifyContent: 'center', flex: 1,color:colors.text}}>
               Panchayat
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}
              source={require('../Assets/familyman.jpg')}>
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
                <Text>
                  <Image
                    source={require('../Assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text
              style={{textAlign: 'center', justifyContent: 'center', flex: 1,color:colors.text}}>
            Family Man
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}
              source={require('../Assets/laxmi.jpg')}>
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
                <Text>
                  <Image
                    source={require('../Assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text
              style={{textAlign: 'center', justifyContent: 'center', flex: 1,color:colors.text}}>
             Laxmi
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}
              source={require('../Assets/arya.jpg')}>
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
                <Text>
                  <Image
                    source={require('../Assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text
              style={{textAlign: 'center', justifyContent: 'center', flex: 1,color:colors.text}}>
               Arya
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
];

const Posters = ({navigation}) => {
  const {colors} =useTheme()
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 12,
          marginVertical: 0,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 10,
          }}>
          Posters
        </Text>

        <Text
          style={{
            marginVertical: 5,
          }}
          onPress={() => navigation.navigate('Posters')}>
          see all
        </Text>
      </View>

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
              }}>
              <View>
                <Image
                  source={element.img}
                  style={{
                    height: 220,
                    width: 165,
                    overflow: 'hidden',
                    borderRadius: 5,
                    marginHorizontal: 5,
                  }}></Image>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const StillImages = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          marginHorizontal: 5,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 17, fontWeight: '700'}}>Image/Stills</Text>
        <Text onPress={() => navigation.navigate('Image')}>see all</Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}
              source={require('../Assets/alia.jpg')}>
              <View
                style={{
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>
            </ImageBackground>
          </TouchableOpacity>
         
        </View>

        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}
              source={require('../Assets/mahesh.jpg')}>
              <View
                style={{
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>
            </ImageBackground>
          </TouchableOpacity>
         
        </View>

        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
                
              }}
              source={require('../Assets/salman.jpg')}>
              <View
                style={{
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>
            </ImageBackground>
          </TouchableOpacity>
          
        </View>

        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              style={{
                height: 150,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}
              source={require('../Assets/pankaj.jpg')}>
              <View
                style={{
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>
            </ImageBackground>
          </TouchableOpacity>
         
        </View>
      </ScrollView>
    </View>
  );
};

//news

const Data1 = [
  {
    id: 1,
    img: require('../Assets/antman.jpg'),
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    date: 'March 24,2022 1:20 IST',
  },
  {
    id: 2,
    img: require('../Assets/chris.jpg'),
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    date: 'March 24,2022 1:20 IST',
  },
  {
    id: 3,
    img: require('../Assets/irishman.jpg'),
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    date: 'March 24,2022 1:20 IST',
  },
  {
    id: 4,
    img: require('../Assets/ritik.jpg'),
    description:
      'Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus,Lorem ipsum dolor sit amet, venenatis velit nec, luctus lectus',
    date: 'March 24,2022 1:20 IST',
  },
];

const DetailSection = ({item}) => {
  const {colors} = useTheme()
  return (
    <TouchableOpacity style={styles.ViewContainer}>
      <View style={styles.itemImgContainer}>
        <Image
          source={item.img}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
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
        <Text style={{flex: 1, overflow: 'hidden'}}>{item.description}</Text>

        <Text style={{marginTop: 10}}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const News = ({navigation}) => {
  const renderItem = ({item}) => (
    <DetailSection navigation={navigation} item={item}></DetailSection>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.headerText}> News </Text>

      <FlatList
        data={Data1}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

//parties

const Party = ({item}) => {
  return (
    <TouchableOpacity style={styles.ViewContainer}>
      <View style={styles.itemImgContainer}>
        <Image
          source={item.img}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
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
        <Text style={{flex: 1, overflow: 'hidden'}}>{item.description}</Text>

        <Text style={{marginTop: 10}}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Parties = ({navigation}) => {
  const renderItem = ({item}) => (
    <DetailSection navigation={navigation} item={item}></DetailSection>
  );
  return (
    <SafeAreaView style={{flex: 1, marginBottom: 100}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <Text style={styles.headerText}> Parties and Events </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
          }}
          onPress={() => navigation.navigate('Parties')}>
          {' '}
          See all
        </Text>
      </View>

      <FlatList
        data={Data1}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

const Plot = () => {
  return (
    <View>
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 5,
        }}>
        <Text
          style={{
            marginVertical: 5,
            fontWeight: '600',
          }}>
          Plot and Review
        </Text>

        <Text
          style={{
            marginVertical: 5,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text
          style={{
            marginVertical: 5,
            fontWeight: '600',
          }}>
          Peaky Billinders Movie Review
        </Text>

        <Text
          style={{
            fontWeight: '600',
          }}>
          BollywoodMDB
        </Text>

        <Text
          style={{
            marginVertical: 5,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View
          style={{
            marginHorizontal: 25,
          }}>
          <Text
            style={{
              marginVertical: 5,
            }}>
            One Line Review: Lorem Ipsum is simply dummy
          </Text>

          <Text
            style={{
              marginVertical: 5,
            }}>
            Positive Points: Lorem Ipsum is simply dummy
          </Text>

          <Text
            style={{
              marginVertical: 5,
            }}>
            Negative Points: Lorem Ipsum is simply dummy
          </Text>
        </View>

        <Text
          style={{
            marginVertical: 5,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontWeight: '700',
            }}>
            Plot:
          </Text>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled
        </Text>
      </View>
    </View>
  );
};

const MovieDetails = ({navigation}) => {
  return (
    <View>
      <View>
        <CustomHeader title="Movie Detail" isHome={false} />
      </View>

      <ScrollView>
        <ImageBackground source={require('../Assets/mahesh.jpg')}
        
        style={{
          width:'100%',
          height:200,
          

        }}>

<View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
            marginTop:180,
          }}>
          <Image
            source={require('../Assets/mahesh.jpg')}
            style={{
              height: 180,
              width: 120,
            }}
          />

          <View style={{alignItems: 'center',
        marginTop:40}}>
            <Text style={{textAlign: 'center'}}>
              Movie | Adventure | Comedy
            </Text>

            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <View style={{alignItems: 'center', marginHorizontal: 4}}>
                <Image
                  source={require('../Assets/star.png')}
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: '#E5B51F',
                  }}
                />

                <Text style={{fontSize: 12, fontWeight: '500'}}>
                  Critic's ratings
                </Text>

                <Text style={{fontSize: 13}}>4.4/5.0</Text>
              </View>

              <View style={{alignItems: 'center', marginHorizontal: 4}}>
                <Image
                  source={require('../Assets/star.png')}
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: '#E5B51F',
                  }}
                />

                <Text style={{fontSize: 12, fontWeight: '500'}}>
                  Critic's ratings
                </Text>

                <Text style={{fontSize: 13}}>4.4/5.0</Text>
              </View>

              <View style={{alignItems: 'center', marginHorizontal: 4}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ReviewWrite')}>
                  <Image
                    source={require('../Assets/notes.png')}
                    style={{
                      height: 18,
                      width: 18,
                      tintColor: 'red',
                    }}
                  />
                </TouchableOpacity>

                <Text style={{fontSize: 12, fontWeight: '500'}}>
                  Critic's ratings
                </Text>

                <Text style={{fontSize: 13}}>4.4/5.0</Text>
              </View>
            </View>

            <Text
              style={{
                marginVertical: 10,
              }}>
              Add to Your Favorites
            </Text>

            <Image
              source={require('../Assets/heart.png')}
              style={{
                height: 20,
                width: 22,
                tintColor: '#C83928',
              }}
            />
          </View>
        </View>

        </ImageBackground>
       

        <View
          style={{
            marginHorizontal: 10,
            marginTop:180
          }}>
          <Text
            style={{
              fontSize: 14,
            }}>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
          </Text>

          <Text
            style={{
              marginVertical: 10,
              color: 'grey',
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate('Banner')}>
            Banner: Some Banner
          </Text>
        </View>

        <View>
          <CastList navigation={navigation}></CastList>
        </View>

        <View>
          <RelatedTopics navigation={navigation}></RelatedTopics>
        </View>

        <View>
          <LatestMovies></LatestMovies>
        </View>

        <View>
          <Posters navigation={navigation}></Posters>
        </View>

        <View>
          <StillImages navigation={navigation} />
        </View>

        <View>
          <Plot></Plot>
        </View>

        <View>
          <News />
        </View>

        <View>
          <Parties navigation={navigation}></Parties>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  itemImgContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  Sectionimg: {
    width: 140,
    height: 100,
  },
  ViewContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 2,
  },
});
