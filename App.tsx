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
import HomeScreen from './src/screens/Personal/HomeScreen';
import LoanScreen from './src/screens/Personal/LoanScreen';
import NewHomeScreen from './src/screens/Personal/NewHomeScreen';
import NewLoanScreen from './src/screens/Personal/NewLoanScreen';
import NewRaviScreen from './src/screens/Personal/NewRaviScreen';
import NewShashiScreen from './src/screens/Personal/NewShashiScreen';
import PersonalMainScreen from './src/screens/Personal/Personal';
import RaviScreen from './src/screens/Personal/RaviScreen';
import ShashiScreen from './src/screens/Personal/ShashiScreen';

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
        <Stack.Screen
          name="ShashiScreen"
          component={ShashiScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewShashiScreen"
          component={NewShashiScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RaviScreen"
          component={RaviScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewRaviScreen"
          component={NewRaviScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewHomeScreen"
          component={NewHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoanScreen"
          component={LoanScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewLoanScreen"
          component={NewLoanScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
