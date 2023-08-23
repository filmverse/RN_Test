import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, Alert } from "react-native";
import TestRenderer from 'react-test-renderer';

const Separator = () => <View style={styles.separator} />;

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Separator />
                <Text style={styles.title}>Hello Text</Text>
                <Separator />
                <TouchableOpacity style={styles.button} onPress={() => {Alert.alert('Hello Touchable Text')}}>
                    <Text>Hello Touchable Text</Text>
                </TouchableOpacity>
                <Separator />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#380C2A',
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
