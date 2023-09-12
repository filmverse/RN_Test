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
  const [text, setText] = React.useState('');
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
      <Text style={styles.text}>Payment App</Text>
      <Text style={styles.text}>Test App</Text>
      <Text style={styles.text1}>Choose your payment method</Text>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <Pressable onPress={() => {setText("Credit Card")}}>
          <Text style={styles.text1}>Credit-Card </Text>
        </Pressable>
        <Pressable onPress={() => {setText('Debit Card')}}>
          <Text style={styles.text1}> Debit-Card </Text>
        </Pressable>
        <Pressable onPress={() => {setText("UPI")}}>
          <Text style={styles.text1}> UPI </Text>
        </Pressable>
        <Pressable onPress={() => {setText("PhonePe")}}>
          <Text style={styles.text1}> PhonePe </Text>
        </Pressable>
        <Pressable onPress={() => {setText("Paytm")}}>
          <Text style={styles.text1}> Paytm </Text>
        </Pressable>
        <Pressable onPress={() => {setText("Internet Banking")}}>
          <Text style={styles.text1}> Internet-Banking </Text>
        </Pressable>
        <Pressable onPress={() => {setText("Other")}}>
          <Text style={styles.text1}> Other </Text>
        </Pressable>
      </ScrollView>
      <Text style={styles.text}>Selected Payment Method: {text}</Text>
      <Button title={text} onPress={() => Alert.alert(text)} />
      <Text style={styles.text1}>We are always their for you.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'purple',
    marginHorizontal: 10,
    marginVertical: 100,
  },
  text: {
    fontSize: 40,
  },
  text1: {
    fontSize: 30,
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