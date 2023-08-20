import React, { useRef } from "react";
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
    <Pressable onPress={() => Alert.alert(`${title.id}`)}>
      <Text style={styles.title}>{title.title}</Text>
    </Pressable>
  </View>
);

const NewApp = () => {

  const listRef = useRef();
  React.useEffect(() => {
    if (listRef.current) {
      const dataObj = listRef.current.props.data[1]
      listRef.current.props.renderItem({item: dataObj});
      console.log(listRef.current.props.renderItem({item: dataObj}));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Flat List Example</Text>
        <FlatList ref={listRef} data={DATA} renderItem={({item}) => <Item title={item} />} keyExtractor={item => item.title} />
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
