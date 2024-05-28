import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function OfficialMainScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Sales"
        onPress={() => navigation.navigate('SalesScreen')}
      />
      <Button
        title="Perchase"
        onPress={() => navigation.navigate('PurchaseScreen')}
      />
      <Button
        title="Statement"
        onPress={() => navigation.navigate('StatementScreen')}
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
