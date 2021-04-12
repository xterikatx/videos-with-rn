import React, {useRef, useState} from 'react';
import YouTube from 'react-native-youtube';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';

const Placeholder = () => {
  return (
    <View style={styles.item}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const VIDEO_LIST = [
  '4W_Br8ZFss8',
  'tJd0x7XeZsk',
  'OGUpt0xYHyI',
  '4W_Br8ZFss8',
  'xzZS9WDzGrU',
  '4W_Br8ZFss8',
  '4W_Br8ZFss8',
  'M007pgA5ZbQ',
  'WxPtYJRjLL0',
  'j48PqBP-OA0',
  'jJdlgKzVsnI',
  'xzZS9WDzGrU',
  '6i01tOMgBDU',
  'Lf0417oXG8E',
];

const Video4 = () => {
  const [visablePostIndex, setVisablePostIndex] = useState(0);

  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems[0]) {
      const index = viewableItems[0].index;
      if (typeof index === 'number') {
        setVisablePostIndex(index);
      }
    } else {
      setVisablePostIndex(-1);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 80});

  return (
    <View style={styles.container}>
      <FlatList
        data={VIDEO_LIST}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) =>
          index === visablePostIndex ? (
            <YouTube
              videoId={item}
              play={true}
              fullscreen={false}
              loop={false}
              onReady={e => console.log('onReady')}
              onChangeState={e => console.log('onChangeState:', e.state)}
              onChangeQuality={e => console.log('onChangeQuality: ', e.quality)}
              onError={e => console.log('onError: ', e.error)}
              style={{width: '100%', height: 300}}
            />
          ) : (
            <Placeholder />
          )
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
export default Video4;
