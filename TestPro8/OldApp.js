import Checkbox from 'expo-checkbox';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestRenderer from 'react-test-renderer';

const App = () => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const radioRef = useRef(null);

  useEffect(() => {
    if (radioRef.current) {
      const abcRad = radioRef.current.props.value;
      console.log(abcRad);
      radioRef.current.props.onValueChange(!isChecked);
      console.log(abcRad);
    }
  }, []);

  console.log(isChecked);
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox ref={radioRef} style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1}/>
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

const tree = TestRenderer.create(<App />);
const root = tree.root;

export default App;