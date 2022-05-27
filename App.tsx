/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import AppBar from './components/appBar';
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';

const App = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const onLoginClick = () => {
    setIsLoginClicked(true);
    setIsSignUpClicked(false);
  };
  const onSignUpClick = () => {
    setIsSignUpClicked(true);
    setIsLoginClicked(false);
  };
  return (
    <NativeBaseProvider>
      <View>
        <AppBar onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} />
        {isLoginClicked && <LoginPage onSignUpClick={onSignUpClick} />}
        {isSignUpClicked && <SignUpPage />}
      </View>
    </NativeBaseProvider>
  );
};

export default App;
