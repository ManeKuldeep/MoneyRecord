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

export default function NewSaleScreen({navigation}) {
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
            billNo: '',
            gst1: '',
            gst2: '',
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
              <Text style={styles.label}>Bill No</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('billNo')}
                onBlur={handleBlur('billNo')}
                value={values.billNo}
              />
              <Text style={styles.label}>GST</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{...styles.textInput, flex: 1}}
                  onChangeText={handleChange('gst1')}
                  onBlur={handleBlur('gst1')}
                  value={values.gst1}
                />
                <TextInput
                  style={{...styles.textInput, flex: 1}}
                  onChangeText={handleChange('gst2')}
                  onBlur={handleBlur('gst2')}
                  value={values.gst2}
                />
              </View>
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
