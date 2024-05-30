import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function ({navigation}) {
  const data = [
    {
      date: '23 June 2024',
      particular: 'to shree cement',
      amount: 200000,
    },
    {
      date: '23 June 2024',
      particular: 'to jay cement',
      amount: 200000,
    },
    {
      date: '23 June 2024',
      particular: 'to JNPA',
      amount: 200000,
    },
  ];
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('NewLoanScreen');
        }}>
        <Text>Add New Entry</Text>
      </Pressable>
      {data.map(element => {
        return (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.subtitle}>{element.particular}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.inlineContent}>
                <View>
                  <Text style={styles.label}>Date:</Text>
                </View>
                <View>
                  <Text> {element.date}</Text>
                </View>
              </View>
              <View style={styles.inlineContent}>
                <View>
                  <Text style={styles.label}>Amount:</Text>
                </View>
                <View>
                  <Text> {element.amount}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    justifyContent: 'center',
    padding: 5,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 24,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineContent: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: 'cyan',
    elevation: 14,
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
