import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function NewRaviScreen({navigation}) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();

  const submitSale = async values => {
    try {
      setError();
    } catch (error) {
      setError(error.message || error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Formik
          initialValues={{
            date: new Date(),
            particular: '',
            amount: '',
          }}
          onSubmit={values => {
            submitSale(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <View>
              <Text style={styles.label}>Date</Text>
              <TextInput
                style={styles.textInput}
                value={values.date.toLocaleString()}
                onChange={() => {}}
                onTouchStart={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  setOpen(true);
                }}
              />
              <DatePicker
                style={styles.textInput}
                modal
                open={open}
                date={values.date}
                onConfirm={date => {
                  setOpen(false);
                  setFieldValue('date', date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                mode="date"
              />
              <Text style={styles.label}>Particular</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('particular')}
                onBlur={handleBlur('particular')}
                value={values.particular}
              />
              <Text style={styles.label}>Amount</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
                value={values.amount}
                keyboardType="number-pad"
              />
              <View style={{marginVertical: 10, flex: 1, rowGap: 20}}>
                <Button onPress={handleSubmit} title="Submit" />
                <Button
                  onPress={() => {
                    navigation.goBack();
                  }}
                  color={'red'}
                  title="Cancel"
                />
              </View>
            </View>
          )}
        </Formik>
        {error && (
          <View>
            <Text style={{color: 'red'}}>{error}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  label: {
    margin: 10,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
