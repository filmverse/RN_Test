import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Payment App</Text>
      <Text style={styles.text}>Test App</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text1}>Choose your payment method</Text>
        <Button title='Credit Card' />
        <Button title='Debit Card' />
        <Button title='PayME' />
        <Button title='BlazorPay' />
        <Button title='IndiaPa' />
        <Button title='MPay' />
        <Button title='PhoneDe' />
        <Button title='VPI' />
        <Button title='Internet Banking' />
        <Button title='Mobile Banking' />
        <Button title='Other' />
        <Text style={styles.text1}>We are always their for you.</Text>
      </ScrollView>
      <Text style={styles.text}>Pay safely with us.</Text>
      <Text style={styles.text}>Your Identity is protected with us.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 40,
    marginVertical: 40,
  },
  text: {
    fontSize: 42,
  },
  text1: {
    fontSize: 30,
  },
});

export default App;