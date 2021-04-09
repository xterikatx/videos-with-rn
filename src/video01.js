import React from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';
import Video from 'react-native-video';
import {flatlistData} from './data';
const Video01 = ({navigation, route}) => {
  //https://github.com/react-native-video/react-native-video

  /**
   * Com as props do Video dar pra personalizar pausa, progresso, duração, loader
   * com essa lib -> https://www.npmjs.com/package/react-native-video-custom-controls
   *
   * Com o react-native-video-custom-controls é possível incluir botoes de voltar,
   * busca, pausa, play, titulo, tratamento de erros
   *
   * Vantagem: customizavel, adaptavel, rápido.
   * Desvantagem; react-native-video não funciona vídeos do youtube, apenas VIMEO,
   * se usar o vimeo PRO
   *
   * Também tem como usar, uma lib chamada react-native-media-controls
   * Ela também é usada com react-native-video, segundo a própria documentação é
   * um "sweet UI" para manipular videos. (Acredito que, se dar pra criar um componente
   * que manipule videos de outra lib, dar pra criar um controlador customizavel também)
   */
  const {urlVideo} = route.params;
  console.warn(urlVideo);
  return (
    <>
      <Video source={{uri: urlVideo}} style={{flex: 1}} controls />
      <View style={{flex: 1}}>
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

export default Video01;
