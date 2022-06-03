import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import CustomHeader from '../Header/CustomHeader';

export default function VideoPlayer({navigation, route}) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const {videoId} = route.params;
  return (
    <View>
      <CustomHeader title="Trailer" isHome={false} navigation={navigation} />

      <YoutubePlayer
        webViewProps={{opacity: 0.99}}
        height={300}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />

      <Text
        onPress={togglePlaying}
        style={{
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginHorizontal: 50,
          textAlign: 'center',
          color: 'white',
        }}>
        {playing ? 'Pause' : 'Play'}
      </Text>
    </View>
  );
}
