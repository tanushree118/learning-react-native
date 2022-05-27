import {HStack, Button, Stack} from 'native-base';
import React from 'react';
import styles from './app-bar.scss';

interface Props {
  onLoginClick: any;
  onSignUpClick: any;
}

const AppBar = ({onLoginClick, onSignUpClick}: Props) => {
  return (
    <HStack style={styles.appBarContainer} px="4" py="3">
      <HStack>
        <Stack
          mb="2.5"
          mt="1"
          direction={{
            base: 'row',
            md: 'row',
          }}
          space={2}
          mx={{
            base: 'auto',
            md: '0',
          }}>
          <Button colorScheme="indigo" onPress={onLoginClick}>
            Login
          </Button>
          <Button colorScheme="indigo" onPress={onSignUpClick}>
            Sign up
          </Button>
        </Stack>
      </HStack>
    </HStack>
  );
};

export default AppBar;
