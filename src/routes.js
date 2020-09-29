import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NotesScreen from './components/Notes';
import NoteScreen from './components/Note';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={ {headerShown:false}} name="My Notes" component={NotesScreen} />
        <Stack.Screen options={ {headerShown:false}} name="Note" component={NoteScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}