import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-community/async-storage';

import { themes } from '../../settings/globalStyles';
import Header from '../Header';
import Note from './Note';
import { 
  Container, 
  Notes, 
  AddBtn, 
  Loading, 
  NotesBtn } from './styles';

const notesAmount = [{
  title: 'Note2', 
  content: 'Note2 content', 
  date: '14/10/1402', 
  favorite: false
},
{
  title: 'Note5', 
  content: 'Note5 content', 
  date: '20/05/1856', 
  favorite: true
},
{
  title: 'Note3', 
  content: 'Note3 content', 
  date: '23/52/1856', 
  favorite: true
},
{
  title: 'Note1', 
  content: 'Note1 content', 
  date: '20/52/2015', 
  favorite: false
},
{
  title: 'Note6', 
  content: 'Note6 content', 
  date: '52/95/5999', 
  favorite: true
}]

export default function Home() {  
  const [theme, setTheme] = useState(themes.light);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState(notesAmount);
  const [optionsOpen, setOptionsOpen] = useState(false);

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

  const createNote = () => {
    try {
      const newNote = {
        title: 'Empty Title',
        content: 'Type something',
        date: '00/00/0000',
        favorite: false
      }
      setNotes([...notes, newNote]);
      navigation.navigate('Note', {note: newNote});
    } catch(error) {
      // error
    }
  }

  return (
    <Container theme={theme} >
      {isLoading && 
        <Loading theme={theme}>
          <ActivityIndicator size="large" color={theme.secondary} />
        </Loading>}
      {!isLoading && 
        <>
          <Header title='My Notes' theme={theme} changeTheme={changeTheme} />
          <Notes>
            <NotesBtn activeOpacity={1} onPress={() => setOptionsOpen(false)}>
              {notes.map((note, index) => (
                <Note 
                  theme={theme} 
                  note={note} 
                  key={index} 
                  index={index} 
                  lastKey={notes.length-1} 
                  optionsOpen={optionsOpen} 
                  setOptionsOpen={setOptionsOpen} 
                />
              ))}
            </NotesBtn>
          </Notes>
          <AddBtn>
            <AntDesign 
              name="pluscircle" 
              size={72} 
              color={theme.secondary} 
              onPress={createNote} />
          </AddBtn>
        </>
      }
    </Container>
  )
}