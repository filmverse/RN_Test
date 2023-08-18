import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const OldApp = () => {
  const [query, setQuery] = React.useState('Text');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>This is just a text.</Text>
        <Separator />
        <TextInput
          style={styles.input}
          onChangeText={text => setQuery(text)}
          value={query}
        />
        <Separator />
        <Button title="Button1" onPress={() => Alert.alert('Test Button1')} />
        <Separator />
        <Button title="Button2" onPress={() => Alert.alert('Test Button2')} />
        <Separator />
        <Button title="Button3" onPress={() => Alert.alert('Test Button3')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default OldApp;
