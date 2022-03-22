/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

const Cat = (props: {name: string}) => {
  return (
    <View>
      <Text>Hello! I am {props.name}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Cat name={'Maru'} />
      <Cat name={'Tom'} />
      <Cat name={'Jimmy'} />
    </View>
  );
};

export default App;
