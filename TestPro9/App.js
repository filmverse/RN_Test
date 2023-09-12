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
  React.useEffect(() => {
    if (flatTestRenderList) {
      setTimeout(() => {
        flatTestRenderList();
      }, 2000);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Payment App</Text>
      <Text style={styles.text}>Test App</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text1}>Choose your payment method</Text>
        <Button title='Credit Card' onPress={() => Alert.alert("Credit Card")} />
        <Button title='Debit Card' onPress={() => Alert.alert("Debit Card")} />
        <Button title='PayME' onPress={() => Alert.alert("PatME")} />
        <Button title='BlazorPay' onPress={() => Alert.alert("BlazorPay")} />
        <Button title='IndiaPa' onPress={() => Alert.alert("IndiaPa")} />
        <Button title='MPay' onPress={() => Alert.alert("MPay")} />
        <Button title='PhoneDe' onPress={() => Alert.alert("PhoneDe")} />
        <Button title='VPI' onPress={() => Alert.alert("VPI")} />
        <Button title='Internet Banking' onPress={() => Alert.alert("Internet Banking")} />
        <Button title='Mobile Banking' onPress={() => Alert.alert("Mobile Banking")} />
        <Button title='Other' onPress={() => Alert.alert("Other Payment Method")} />
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

const tree = TestRenderer.create(<App />);
const root = tree.root;

const flatTest = root.findAllByType(Button).map(ftt => ftt._fiber.child.pendingProps)
const flatTestRender = flatTest.map(fttr => fttr.onPress)
const flatTestRenderList = flatTestRender[1]

console.log(flatTestRenderList, 'last log');

export default App;