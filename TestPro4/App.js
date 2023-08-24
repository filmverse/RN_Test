import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, Alert, StatusBar } from "react-native";
// import TestRenderer from 'react-test-renderer';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const Separator = () => <View style={styles.separator} />;

const App = () => {
    const renderItem = ({item}) => {
      return (
        <View>
            <TouchableOpacity style={styles.listButton} onPress={() => {Alert.alert(`Pressed item id: ${item.id}`)}}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        </View>
      )
    };
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
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
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
  listButton: {
    alignItems: 'center',
    backgroundColor: '#171421',
    padding: 8,
    marginVertical: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
