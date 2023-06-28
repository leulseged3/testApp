import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../enums';
import {DetailScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
    <Stack.Screen name={ScreenNames.DetailScreen} component={DetailScreen} />
  </Stack.Navigator>
);
