import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/main-stack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
