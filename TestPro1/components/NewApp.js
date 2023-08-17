import {SafeAreaView, View, StyleSheet, ToastAndroid, Button, Text, Alert} from 'react-native';
import React, {useEffect, useRef} from 'react';

const NewApp = () => {
  const viewRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    ToastAndroid.show(`123`, ToastAndroid.LONG)
    console.log(viewRef);
    if (viewRef.current) {
      ToastAndroid.show(`Hello`, ToastAndroid.LONG)
      try {
          viewRef.current._internalFiberInstanceHandleDEV.memoizedProps.children[1].props.onPress();
         } catch (error) {
          ToastAndroid.show(`${error}`, ToastAndroid.LONG);
         }
      if (viewRef.current._internalFiberInstanceHandleDEV) {
         ToastAndroid.show(`Hello Nested`, ToastAndroid.LONG)
         if (viewRef.current._internalFiberInstanceHandleDEV.memoizedProps) {
          ToastAndroid.show(`Hello Nested again`, ToastAndroid.LONG)
          viewRef.current._internalFiberInstanceHandleDEV.memoizedProps.children[1].props.onPress();
         }
      }
      // console.log(viewRef.current._internalFiberInstanceHandleDEV.pendingProps.children[1].props.onPress);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View ref={viewRef}>
        <Text style={styles.title}>This is just a text.</Text>
        <Button
          title="Pop-Up Button"
          ref={btnRef}
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

export default NewApp;
