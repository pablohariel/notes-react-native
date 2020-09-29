import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';

export default function Notes() {
  return (
    <View style={{ backgroundColor: '#2F3437', flex: 1 }}>
      <Header title='My Notes' />
      <Text>Salve</Text>
    </View>
  )
}