import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Video01 from './src/video01';
import Video02 from './src/video02';
import ListVideos from './src';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />

      <Stack.Navigator initialRouteName="List" screenOptions={screenOptions}>
        <Stack.Screen name="List" component={ListVideos} />
        <Stack.Screen name="Video1" component={Video01} />
        <Stack.Screen name="Video2" component={Video02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#222',
  },
  headerTintColor: '#fff',
};

export default App;
