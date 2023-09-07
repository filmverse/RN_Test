import React from 'react';
import {View, Button, Text, Alert, StyleSheet} from 'react-native';
import TestRenderer from 'react-test-renderer';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import CheckBox from '@react-native-community/checkbox';

const Separator = () => <View style={styles.seprator} />;

const App = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);
  const [value, setValue] = React.useState('Unselected');
  React.useEffect(() => {
    if (root._fiber.child.pendingProps) {
      root._fiber.child.pendingProps.children[2].props.onValueChange();
      console.log(root._fiber.child.pendingProps.children[2].props);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Text for Testing</Text>
      <Separator />
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
      />
      <Separator />
      <Button
        title="Toggle the Value Below"
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
      />
      <Separator />
      <SegmentedControl
        values={['One', 'Two', 'Three']}
        selectedIndex={selectedIndex}
        onChange={event => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
        onValueChange={val => setValue(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  seprator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const tree = TestRenderer.create(<App />);
const root = tree.root;

export default App;
