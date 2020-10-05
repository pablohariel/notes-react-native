import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-community/async-storage';

import { themes } from '../../settings/globalStyles';
import Header from '../Header';
import Note from './Note';
import { Container, Notes, AddBtn, Loading } from './styles';

export default function Home() {  
  const [theme, setTheme] = useState(themes.light);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    try {
      loadTheme();
    } catch(error) {
      // error
    }
  }, [])

  const loadTheme = async () => {
    try {
      const response = await AsyncStorage.getItem('theme');
      response != null && setTheme(JSON.parse(response));
      setIsLoading(false);
    } catch(error) {
      // error
    }
  }

  const changeTheme = async () => {
    try {
      if(theme.primary === themes.dark.primary && theme.secondary == themes.dark.secondary) {
        setTheme(themes.light);
        await AsyncStorage.setItem('theme', JSON.stringify(themes.light));
      } else {
        setTheme(themes.dark);
        await AsyncStorage.setItem('theme', JSON.stringify(themes.dark));
      }
    } catch(error) {
      // error
    }
  }

  return (
    <Container theme={theme}>
      {isLoading && 
        <Loading theme={theme}>
          <ActivityIndicator size="large" color={theme.secondary} />
        </Loading>}
      {!isLoading && 
        <>
          <Header title='My Notes' theme={theme} changeTheme={changeTheme} />
          <Notes>
            <Note theme={theme} />
            <Note theme={theme} />
            <Note theme={theme} />
            <Note theme={theme} />
            <Note theme={theme} />
            <Note theme={theme} />
            <Note theme={theme} />
            <Note theme={theme} />
          </Notes>
          <AddBtn>
            <AntDesign name="pluscircle" size={72} color={theme.secondary} onPress={() => navigation.navigate('Note')} />
          </AddBtn>
        </>
      }
    </Container>
    
  )
}