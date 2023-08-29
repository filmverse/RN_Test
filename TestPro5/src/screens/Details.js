import { Button, Text, View, StyleSheet } from 'react-native'
import React from 'react'

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textColor}>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "#000000",
  }
});

export default DetailsScreen;