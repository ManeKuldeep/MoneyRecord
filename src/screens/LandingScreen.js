import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

export default function LandingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="SJHC (Official)"
        onPress={() => navigation.navigate('OfficialMainScreen')}
      />
      <Button
        title="Personal"
        onPress={() => navigation.navigate('PersonalMainScreen')}
      />
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
