import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as Screen from '../screens';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="spendingLogs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Screen.Home} />
        <Stack.Screen
          name="spendingLogs"
          component={Screen.SpendingLogs}
          options={{
            headerShown: true,
            title: 'Spending Activity',
          }}
        />
        <Stack.Screen
          name="spendingForm"
          component={Screen.SpendingForm}
          mode="modal"
          options={{
            headerShown: true,
            title: 'Add item',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
