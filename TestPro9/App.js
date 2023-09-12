import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
  Pressable,
  Button,
  ToastAndroid,
} from 'react-native';
import TestRenderer from 'react-test-renderer';

const App = () => {
  const [text, setText] = React.useState("");
  React.useEffect(() => {
        if (flatTestRenderList) {
          setTimeout(() => {
            flatTestRenderList();
          }, 2000);
        }
  }, []);
  console.log(text);
  ToastAndroid.show(text, ToastAndroid.SHORT);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>I Pay Global Bank</Text>
      {/* <Text style={styles.text}>Test App</Text> */}
      <Text style={styles.text1text}>Choose your payment method to process further</Text>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <Pressable onPress={() => {setText("Credit Card")}}>
          <Text style={styles.text1}>Credit-Card</Text>
        </Pressable>
        <Pressable onPress={() => {setText("Debit Card")}}>
          <Text style={styles.text1}>Debit-Card</Text>
        </Pressable>
        <Pressable onPress={() => {setText("UPI")}}>
          <Text style={styles.text1}>UPI</Text>
        </Pressable>
        <Pressable onPress={() => {setText("PhonePe")}}>
          <Text style={styles.text1}>PhonePe</Text>
        </Pressable>
        <Pressable onPress={() => {setText("Paytm")}}>
          <Text style={styles.text1}>Paytm</Text>
        </Pressable>
        <Pressable onPress={() => {setText("Internet Banking")}}>
          <Text style={styles.text1}>Internet-Banking</Text>
        </Pressable>
        <Pressable onPress={() => {setText("Other")}}>
          <Text style={styles.text1}>Other</Text>
        </Pressable>
      </ScrollView>
      <Text style={styles.text1text}>Selected Payment Method: {text}</Text>
      <Pressable onPress={() => Alert.alert(text)}>
        <Text style={styles.text1}>{text}</Text>
      </Pressable>
      <Text style={styles.text1text}>We are always their for you.</Text>
      <Text style={styles.text}>Thank you for banking with us.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 100,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'gold',
  },
  text1text: {
    fontSize: 20,
    color: '#E9AD0C',
  },
  text1: {
    fontSize: 25,
    borderRadius: 8,
    padding: 6,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
    color: '#00CD00',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const tree = TestRenderer.create(<App />);
const root = tree.root;

const flatTest = root.findAllByType(Pressable).map(ftt => ftt._fiber.child.pendingProps)
const flatTestRender = flatTest.map(fttr => fttr.onPress)
const flatTestRenderList = flatTestRender[1]

console.log(flatTestRenderList, 'last log');

export default App;