import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';

import { 
  Container, 
  Content, 
  Loading } from './styles';
  
import Header from '../Header';

export default function Note({ route }) {
  const { note } = route.params;

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [theme, setTheme] = useState({primary: '#2F3437', secondary: '#F2F2F2'});
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <Container theme={theme}>
      {isLoading && 
        <Loading theme={theme}>
          <ActivityIndicator size="large" color={theme.secondary} />
        </Loading>
      }
      {!isLoading && 
        <>
          <Header 
            title={title} 
            type="arrow-edit" 
            setTitle={setTitle} 
            theme={theme} 
          />
          <Content 
            value={content} 
            theme={theme} 
            onChangeText={value => setContent(value)} 
          />
        </>
      }
    </Container>
  )
}