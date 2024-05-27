import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './src/screens/LandingScreen';
import MainScreen from './src/screens/Main';
import NewPurchaseScreen from './src/screens/Official/NewPurchase';
import NewSaleScreen from './src/screens/Official/NewSale';
import NewStatementScreen from './src/screens/Official/NewStatement';
import OfficialMainScreen from './src/screens/Official/Official';
import PurchaseScreen from './src/screens/Official/Purchase';
import SalesScreen from './src/screens/Official/Sales';
import StatementScreen from './src/screens/Official/Statement';
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
        <Stack.Screen
          name="SalesScreen"
          component={SalesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewSaleScreen"
          component={NewSaleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PurchaseScreen"
          component={PurchaseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPurchaseScreen"
          component={NewPurchaseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StatementScreen"
          component={StatementScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewStatementScreen"
          component={NewStatementScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
