import React from 'react';

export default function OfficialMainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Sales" onPress={() => navigation.navigate('Sales')} />
      <Button
        title="Perchase"
        onPress={() => navigation.navigate('Purchase')}
      />
      <Button
        title="Statement"
        onPress={() => navigation.navigate('Statement')}
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
