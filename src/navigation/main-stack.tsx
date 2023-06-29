import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../enums';
import {DetailScreen, HomeScreen} from '../screens';
const Arrow = require('../assets/icons/arrow.png');

const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      statusBarColor: '#FFFFFF',
      statusBarStyle: 'dark',
      headerBackImageSource: Arrow,
    }}>
    <Stack.Screen
      name={ScreenNames.HomeScreen}
      component={HomeScreen}
      options={{
        title: '자유톡',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'NotoSans',
          fontWeight: '700',
          fontSize: 18,
          color: '#1D232B',
        },
      }}
    />
    <Stack.Screen
      name={ScreenNames.DetailScreen}
      component={DetailScreen}
      options={{
        title: '{title of the book}',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'NotoSans',
          fontWeight: '700',
          fontSize: 18,
          color: '#1D232B',
        },
      }}
    />
  </Stack.Navigator>
);
