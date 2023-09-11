import React from 'react';
import { View, Button, Text, ToastAndroid, StyleSheet } from 'react-native';
import TestRenderer from 'react-test-renderer';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';

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
  const [checked, setChecked] = React.useState('first');

  React.useEffect(() => {
    if (root._fiber.child.pendingProps) {
      // console.log(root._fiber.child.pendingProps.children[5].props.children);
      // console.log(root._fiber.child.pendingProps.children[6].props.children[1].props);
      // root._fiber.child.pendingProps.children[0].props.children[1].props.onPress();
      root._fiber.child.pendingProps.children[2].props.children[1].props.onPress();
      console.log(root._fiber.child.pendingProps.children[1].props.children[1].props.status, "log in effect");
      console.log(root._fiber.child.pendingProps.children[2].props.children[1].props.status, "log in effect");
      console.log(root._fiber.child.pendingProps.children[1].props.children[1].props, "log in effect");
      console.log(root._fiber.child.pendingProps.children[2].props.children[1].props, "log in effect");
    }
    // console.log(checked);
    ToastAndroid.show(checked, ToastAndroid.SHORT);
  }, []);
  console.log(checked);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Hello Text for Testing</Text>
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
      /> */}
      <Separator />
      <Text>Radio First Button Accept
        <RadioButton
          value="Accept"
          onPress={() => setChecked('first')}
          status={checked === 'first' ? 'checked' : 'unchecked'}
        />
      </Text>
      <Text>Radio Second Button Decline
        <RadioButton
          value="Decline"
          onPress={() => setChecked('second')}
          status={checked === 'second' ? 'checked' : 'unchecked'}
        />
      </Text>
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
