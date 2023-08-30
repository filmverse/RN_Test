import { Button, Text, View, StyleSheet } from 'react-native'
import React from 'react'

function DetailsScreen({ route, navigation }) {
  const {testProp, otherParam} = route.params;
  console.log(typeof(testProp));
  const myTestProp = testProp.findAllByType(Button).map(ftt => ftt._fiber.child.pendingProps.onPress)
  console.log(myTestProp[1]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textColor}>Details Screen</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.popToTop()}
      />
      {/* <Button title='test route button' onPress={myTestProp[1]()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "#000000",
  }
});

export default DetailsScreen;