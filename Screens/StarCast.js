import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CustomHeader from '../Header/CustomHeader';

const Data = [
  {
    id: 1,
    img: require('../Assets/antman.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: 2,
    img: require('../Assets/moneyheist.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: 3,
    img: require('../Assets/ray.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: 4,
    img: require('../Assets/arya.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: 5,
    img: require('../Assets/bb2.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: 6,
    img: require('../Assets/laxmi.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
];

const DataItem = ({description, uri, navigation}) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('NewsAdda')}>
      <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
        <View style={{height: 110, width: 130, marginLeft: 5}}>
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
    </TouchableOpacity>
  </View>
);
const RelatedTopics = ({navigation}) => {
  const renderItem = ({item}) => (
    <DataItem
      description={item.description}
      uri={item.img}
      navigation={navigation}></DataItem>
  );

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <Text style={{marginLeft: 15, fontSize: 18, fontWeight: '700'}}>
        Related Topics
      </Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

//pratik

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

const Photos = () => {
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
          Photos
        </Text>

        <Text
          style={{
            marginVertical: 5,
          }}>
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

              <Text
                style={{
                  textTransform: 'capitalize',
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '800',
                }}>
                {element.celebName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

//pratik2

const Videos = () => {
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
              source={require('../Assets/alia.jpg')}>
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
                  backgroundColor: 'black',
                  opacity: 0.6,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                  ,
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
              source={require('../Assets/allu.jpg')}>
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
        </View>
      </ScrollView>
    </View>
  );
};

const com = [
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

const Filmigo = () => {
  return (
    <View style={{marginBottom: 100}}>
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
          Filmigo
        </Text>

        <Text
          style={{
            marginVertical: 5,
          }}>
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

const StarCast = ({navigation}) => {
  return (
    <View>
      <View>
        <CustomHeader title="Star Cast" isHome={false} />
      </View>
      <ScrollView>
        <View style={{flexDirection:'row', marginTop:20,
      marginLeft:10}}>

          <Image 
          source={require('../Assets/kiara.jpg')}
          style={{
            height:140,
            width:120,
          }}
          />
          <View  style={{marginHorizontal:15,}}>
          <Text style={{fontWeight:'600'}}>
          Lorem Ipsum
          </Text>

          <Text>
          Lorem Ipsum has been 
           industry's standard dummy text 
          </Text>

          <Text >
          when an unknown printer took a galley 
          of type and scrambled it to make a type 
   
          </Text>
          </View>

        </View>


        <View>
          <RelatedTopics navigation={navigation}> </RelatedTopics>
        </View>

        <View>
          <Photos> </Photos>
        </View>

        <View>
          <Videos></Videos>
        </View>

        <View>
          <Filmigo></Filmigo>
        </View>
      </ScrollView>
    </View>
  );
};

export default StarCast;
