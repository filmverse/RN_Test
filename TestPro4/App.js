import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, Alert, StatusBar } from "react-native";
// import TestRenderer from 'react-test-renderer';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Separator = () => <View style={styles.separator} />;

const App = () => {
    const renderItem = ({item}) => {
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {Alert.alert(`Pressed item id: ${item.id}`)}}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        </View>
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
