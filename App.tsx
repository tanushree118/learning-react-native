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
import {Text, View, Button} from 'react-native';

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

const App = () => {
  return (
    <View>
      <Cat name={'Munkustrap'} />
      <Cat name={'Spot'} />
    </View>
  );
};

export default App;
