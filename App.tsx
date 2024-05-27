import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './src/screens/LandingScreen';
import MainScreen from './src/screens/Main';
import OfficialMainScreen from './src/screens/Official/Official';
import PersonalMainScreen from './src/screens/Personal/Personal';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalMainScreen"
          component={PersonalMainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OfficialMainScreen"
          component={OfficialMainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
