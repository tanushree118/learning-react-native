/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

const Cat = (props: {name: string}) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        {' '}
        I am {props.name}, and I am {(isHungry && 'hungry') || 'full'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you'}
      />
    </View>
  );
};

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder={'Type some text'}
        onChangeText={(newText: string) => setText(newText)}
        defaultValue={text}
      />
      <Text>
        {text
          .split(' ')
          ?.map(word => word && '🍕')
          .join('')}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Cat name={'Munkustrap'} />
      <Cat name={'Spot'} />
      <PizzaTranslator />
    </View>
  );
};

export default App;
