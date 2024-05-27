import React from 'react';
import {ImageBackground} from 'react-native';

export default function MainScreen({navigation}) {
  setTimeout(() => {
    // navigation.navigate('LandingScreen');
    navigation.replace('LandingScreen');
  }, 1000);
  return (
    <ImageBackground
      source={require('../assests/sjhclogo.jpeg')}
      style={{flex: 1}}
      resizeMode="cover"></ImageBackground>
  );
}
