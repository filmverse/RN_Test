import React from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text, Alert} from 'react-native';
import {useEffect, useRef} from 'react';

const App = () => {
  const viewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current) {
      viewRef.current._internalFiberInstanceHandleDEV.pendingProps.children[1].props.onPress();
      console.log(viewRef.current._internalFiberInstanceHandleDEV.pendingProps.children[1].props.onPress);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View ref={viewRef}>
        <Text style={styles.title}>This is just a text.</Text>
        <Button
          title="Pop-Up Button"
          onPress={() => Alert.alert('Hello Vikas')}
        />
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
});

export default App;
