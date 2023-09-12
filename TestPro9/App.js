import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import TestRenderer from 'react-test-renderer';

const App = () => {
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    flatTestRenderList();
  }, []);
  console.log(text);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Payment App</Text>
      <Text style={styles.text}>Test App</Text>
      <Text style={styles.text1}>Choose your payment method</Text>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <Button title='Credit Card' onPress={() => {setText("Credit Card")}} />
        <Button title='Debit Card' onPress={() => {setText("Debit Card")}} />
        <Button title='PayME' onPress={() => {setText("PayME")}} />
        <Button title='BlazorPay' onPress={() => {setText("BlazorPay")}} />
        <Button title='IndiaPa' onPress={() => {setText("IndiaPa")}} />
        <Button title='MPay' onPress={() => {setText("MPay")}} />
        <Button title='PhoneDe' onPress={() => {setText("PhoneDe")}} />
        <Button title='VPI' onPress={() => {setText("VPI")}} />
        <Button title='Internet Banking' onPress={() => {setText("Internet Banking")}} />
        <Button title='Mobile Banking' onPress={() => {setText("Mobile Banking")}} />
        <Button title='Other' onPress={() => {setText("Other")}} />
      </ScrollView>
      <Button title={text} onPress={() => Alert.alert(text)} />
      <Text style={styles.text1}>We are always their for you.</Text>
      <Text style={styles.text}>Pay safely with us.</Text>
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
    marginHorizontal: 1,
    marginVertical: 100,
  },
  text: {
    fontSize: 42,
  },
  text1: {
    fontSize: 30,
  },
});

const tree = TestRenderer.create(<App />);
const root = tree.root;

const flatTest = root.findAllByType(Button).map(ftt => ftt._fiber.child.pendingProps)
const flatTestRender = flatTest.map(fttr => fttr.onPress)
const flatTestRenderList = flatTestRender[1]

console.log(flatTestRenderList, 'last log');

export default App;