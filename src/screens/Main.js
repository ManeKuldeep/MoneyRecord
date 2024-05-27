import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';

export default function MainScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LandingScreen');
    }, 1000);
  }, []);
  return (
    <ImageBackground
      source={require('../assests/sjhclogo.jpeg')}
      style={{flex: 1}}
      resizeMode="cover"></ImageBackground>
  );
}
