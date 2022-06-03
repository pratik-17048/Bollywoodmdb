import {StyleSheet, Text, View, Image,ImageBackground} from 'react-native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import CustomHeader from '../Header/CustomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

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

        <Text  >see all</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cast.map(element => {
          return (
            <TouchableOpacity
              key={element.id}
              onPress={() => navigation.navigate('StarCast')}
             >
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
    img: require('../Assets/london.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '4',
    img: require('../Assets/pandey.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
];

const DataItem = ({description, uri}) => (
  <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
    <View style={{height:120,width:140,marginLeft:5}}>
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
      <Text style={{flex: 1, overflow: 'hidden',marginLeft:5}}>{description}</Text>
    </View>
  </View>
);
const RelatedTopics = () => {
  const renderItem = ({item}) => (
    <DataItem description={item.description} uri={item.img}></DataItem>
  );

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <Text style={{marginLeft:15,fontSize:15,fontWeight:'700'}}>Related Topics</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};


const LatestMovies = () => {
  return (
    <View >
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
              source={require('../Assets/mahesh.jpg')}>
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
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
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
              source={require('../Assets/mahesh.jpg')}>
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
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
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
              source={require('../Assets/mahesh.jpg')}>
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
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
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
              source={require('../Assets/mahesh.jpg')}>
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
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
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
  return (
    <View >
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
          }} onPress={() => navigation.navigate('Posters')}>
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
  return (
    <View >
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
              source={require('../Assets/mahesh.jpg')}>
              <View
                style={{
                 
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
               
                
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
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
              source={require('../Assets/mahesh.jpg')}>
              <View
                style={{
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
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
              source={require('../Assets/mahesh.jpg')}>
              <View
                style={{
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
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
              source={require('../Assets/mahesh.jpg')}>
              <View
                style={{
            
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
               
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text style={{textAlign:'center',justifyContent:'center',flex:1}}>
              Movie Name 
            </Text>
          </View>
        </View>
      </ScrollView>
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

      
      <View>
        <CastList navigation={navigation}></CastList>
      </View>

      <View>
        <RelatedTopics></RelatedTopics>
      </View>

      <View>
      <LatestMovies></LatestMovies>
      </View>

      <View>
      <Posters  navigation={navigation}></Posters>
      </View>

      <View>
        <StillImages  navigation={navigation}/>
      </View>
      
      </ScrollView>

    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
