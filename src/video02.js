import React, {useCallback, useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Video02 = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Video acabou meu chapa');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'4F1zulNWzDM'}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
};

export default Video02;
