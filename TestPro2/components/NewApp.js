import React from "react";
import { SafeAreaView, View, FlatList, Pressable, Text, TextInput, StatusBar, StyleSheet, Alert } from "react-native";

const DATA = [
  {
    id: '1',
    title: 'One',
  },
  {
    id: '2',
    title: 'Two',
  },
  {
    id: '3',
    title: 'Three',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const NewApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Flat List Example</Text>
        <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} />} keyExtractor={item => item.title} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 32,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})

export default NewApp;
