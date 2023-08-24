import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, Alert, StatusBar, ScrollView } from "react-native";
import TestRenderer from 'react-test-renderer';

const DATA = [
  {
    id: '001',
    text: 'Text FlatList First Item',
    title: 'FlatList First Item',
    NestedDATA: [
      {
        id: '001001',
        text: 'Text FlatList NestedList First Item',
        title: 'FlatList NestedList First Item',
      },
      {
        id: '001002',
        text: 'Text FlatList NestedList First Item',
        title: 'FlatList NestedList Second Item',
      },
      {
        id: '001003',
        text: 'Text FlatList NestedList First Item',
        title: 'FlatList NestedList Third Item',
      },
    ]
  },
  {
    id: '002',
    text: 'Second Text FlatList First Item',
    title: 'Second FlatList First Item',
    NestedDATA: [
      {
        id: '002001',
        text: 'Second Text FlatList NestedList First Item',
        title: 'Second FlatList NestedList First Item',
      },
      {
        id: '002002',
        text: 'Second Text FlatList NestedList First Item',
        title: 'Second FlatList NestedList Second Item',
      },
      {
        id: '002003',
        text: 'Second Text FlatList NestedList First Item',
        title: 'Second FlatList NestedList Third Item',
      },
    ]
  },
  {
    id: '003',
    text: 'Third Text FlatList First Item',
    title: 'Third FlatList First Item',
    NestedDATA: [
      {
        id: '003001',
        text: 'Third Text FlatList NestedList First Item',
        title: 'Third FlatList NestedList First Item',
      },
      {
        id: '003002',
        text: 'Third Text FlatList NestedList First Item',
        title: 'Third FlatList NestedList Second Item',
      },
      {
        id: '003003',
        text: 'Third Text FlatList NestedList First Item',
        title: 'Third FlatList NestedList Third Item',
      },
    ]
  },
];

const Separator = () => <View style={styles.separator} />;

const App = () => {
    const renderItem = ({item}) => {
      return (
        <View>
          <Text style={styles.title}>{item.text}</Text>
            <TouchableOpacity style={styles.listButton} onPress={() => {Alert.alert(`Pressed item id: ${item.id}`)}}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
            <FlatList
                data={item.NestedDATA}
                renderItem={renderNestItem}
                keyExtractor={item => item.id}
            />
        </View>
      )
    };
    const renderNestItem = ({item}) => {
      return (
        <View>
          <Text style={styles.title}>{item.text}</Text>
            <TouchableOpacity style={styles.nestedListButton} onPress={() => {Alert.alert(`Pressed item id: ${item.id}`)}}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        </View>
      )
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Separator />
                <Text style={styles.title}>Hello Text</Text>
                <Separator />
                <TouchableOpacity style={styles.button} onPress={() => {Alert.alert('Hello Touchable Text')}}>
                    <Text>Hello Touchable Text</Text>
                </TouchableOpacity>
                <Separator />
                <FlatList
                    data={DATA}
                    scrollEnabled={true}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <Separator />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 10,
    marginVertical: 1,
  },
  nestedListButton: {
    alignItems: 'center',
    backgroundColor: '#12488B',
    padding: 10,
    marginVertical: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const tree = TestRenderer.create(<App />);
const root = tree.root;

console.log(root._fiber.child.pendingProps.children);

export default App;
