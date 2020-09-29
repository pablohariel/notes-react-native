import React from 'react';
import { View, Text } from 'react-native';

import Header from '../Header';

export default function Note() {
  return (
    <View>
      <Header title="Note Name" type="arrow" />
      <Text>Note</Text>
    </View>
  )
}