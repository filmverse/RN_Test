import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import TestRenderer from 'react-test-renderer';

// Your main app component
function App() {

  React.useEffect(() => {
    if (textElement._fiber.pendingProps) {
      textElement._fiber.pendingProps.onPress();
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, React Native!</Text>
      <Button
        title="My Button"
        onPress={() => {
          Alert.alert('Hello, This is a Button');
        }}
      />
    </View>
  );
}

// Use TestRenderer to render the App component
const tree = TestRenderer.create(<App />);
const root = tree.root;

// Access and interact with the rendered component
const textElement = root.findByType(Button);
console.log(textElement._fiber.pendingProps); // Should output: ['Hello, React Native!']

export default App;