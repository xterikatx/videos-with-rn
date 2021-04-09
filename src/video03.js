import React from 'react';
import {FlatList, TouchableHighlight, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {flatlistData} from './data';
const Video03 = () => {
  return (
    <>
      <WebView
        style={{flex: 1}}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        mixedContentMode
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
      />
      <View>
        <FlatList
          data={flatlistData}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              key={item.key}
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={{}}>
                <Text>{item.name}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </>
  );
};

export default Video03;
