import React from 'react';
import { Text, View, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import TestRenderer from 'react-test-renderer';

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

function App() {

  React.useEffect(() => {
    if (root.findByType(Button)._fiber.pendingProps) {
      root._fiber.child.pendingProps.children[1].props.onPress();
      console.log(root._fiber.child.pendingProps.children[1].props, 'hello');
      const dataProp = root._fiber.child.pendingProps.children[2].props.data[1];
      root._fiber.child.pendingProps.children[2].props.renderItem({item: dataProp}).props.onPress();
      console.log(root._fiber.child.pendingProps.children[2].props.renderItem({item: dataProp}), 'more data regarding flatlist');
    }
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => Alert.alert(`Pressed: ${item.title}`)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, React Native!</Text>
      <Button
        title="My Button"
        onPress={() => {
          Alert.alert('Hello, This is a Button');
        }}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Use TestRenderer to render the App component
const tree = TestRenderer.create(<App />);
const root = tree.root;
// console.log(root.findByType(Button));

// Access and interact with the rendered component
// const textElement = root.findByType(Button);
// console.log(textElement._fiber.pendingProps); // Should output: ['Hello, React Native!']

export default App;
