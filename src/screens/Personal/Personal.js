import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PersonalMainScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Shashi"
        onPress={() => navigation.navigate('ShashiScreen')}
      />
      <Button title="Ravi" onPress={() => navigation.navigate('RaviScreen')} />
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Loan" onPress={() => navigation.navigate('LoanScreen')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    justifyContent: 'center',
    padding: 20,
  },
});
