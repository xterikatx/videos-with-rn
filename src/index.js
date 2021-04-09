import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

const URL = 'https://www.w3schools.com/html/mov_bbb.mp4';

const ListVideos = ({navigation}) => {
  return (
    <>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('Video1', {urlVideo: URL})}>
        <Text style={styles.text}>Video MP4</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('Video2')}>
        <Text style={styles.text}>Youtube Player</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('Video3')}>
        <Text style={styles.text}>Youtube WEBV</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = {
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#222',
    marginTop: 10,
  },
  text: {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 10,
    color: 'white',
  },
};

export default ListVideos;
