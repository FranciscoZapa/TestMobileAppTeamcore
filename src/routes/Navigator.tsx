import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FormScreen} from '../screens/FormScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={FormScreen}
          options={{title: 'Bienvenido'}}
        />
        <Stack.Screen name="Profile" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
