import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/Home';
import NoteScreen from './components/Note';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={ {headerShown:false} } name="Home" component={HomeScreen} />
        <Stack.Screen options={ {headerShown:false} } name="Note" component={NoteScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}