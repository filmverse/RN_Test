import { Button, Text, View, StyleSheet, Alert } from 'react-native'
import React from 'react'
import TestRenderer from 'react-test-renderer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textColor}>Home Screen</Text>
      <Button title='Button1' onPress={() => {Alert.alert('Passing as Props')}} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          testProp: testProp,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "#000000",
  }
});

const tree = TestRenderer.create(<HomeScreen />);
const root = tree.root;

const testProp = root.findAllByType(Button).map(ftt => ftt._fiber.child.pendingProps.onPress)
console.log(testProp[1]);

export default HomeScreen;