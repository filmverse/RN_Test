import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, Alert } from "react-native";
import TestRenderer from 'react-test-renderer';

const Separator = () => <View style={styles.separator} />;

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
                <FlatList data={DATA} keyExtractor={item => item.id} />
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
