import React from 'react';
import { View, Button, Text, Alert, StyleSheet } from 'react-native';
import TestRenderer from 'react-test-renderer';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup from 'react-native-radio-buttons-group';

const Separator = () => <View style={styles.seprator} />;

const App = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const radioButtons = React.useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Option 1',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Option 2',
        value: 'option2',
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = React.useState();

  React.useEffect(() => {
    if (root._fiber.child.pendingProps) {
      root._fiber.child.pendingProps.children[6].props.onPress(root._fiber.child.pendingProps.children[6].props.radioButtons[1]);
      console.log(root._fiber.child.pendingProps.children[6].props);
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
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
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
