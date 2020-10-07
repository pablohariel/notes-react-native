import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation  } from '@react-navigation/native';
import { View } from 'react-native';

import { 
  Container, 
  Title, 
  RightBox, 
  LeftBox, 
  Info, 
  Date, 
  Icons, 
  Options, 
  OptionsBtn, 
  FavoriteBtn, 
  EllipsisBtn } from './styles';

export default function Note({ theme, note = {title: 'Empty', content: 'Empty', favorite: false}, index, lastKey = 1, optionsOpen, setOptionsOpen}) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [date, setDate] = useState(note.date);
  const [favorite, setFavorite] = useState(note.favorite);
  const [localOptionsOpen, setLocalOptionsOpen] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if(!optionsOpen) {
      setLocalOptionsOpen(false)
    }
  }, [optionsOpen])

  const handleOptions = () => {
    setLocalOptionsOpen(true);
    setOptionsOpen(true);
  }

  const isOptionsOpen = () => {
    if(localOptionsOpen == true && optionsOpen == true) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container theme={theme} index={index} lastKey={lastKey} onPress={() => setOptionsOpen(false)} >
      <LeftBox>
        <Title theme={theme} onPress={() => navigation.navigate('Note', {note})}>{title}</Title>
        <Info theme={theme}>{content}</Info>
      </LeftBox>
      <RightBox>
        <Icons>
          <FavoriteBtn>
            {favorite ? 
              <AntDesign 
                name="star" 
                size={24} 
                color={theme.secondary} 
                onPress={() => setFavorite(!favorite)} 
              /> : 
              <AntDesign 
                name="staro" 
                size={24} 
                color={theme.secondary}
                onPress={() => setFavorite(!favorite)} 
              />
            }
          </FavoriteBtn>
          <EllipsisBtn onPress={handleOptions}>
            <FontAwesome5 
              name="ellipsis-v" 
              size={24} 
              color={theme.secondary} 
              onPress={handleOptions} 
            />
          </EllipsisBtn>
          {isOptionsOpen() && 
            <Options theme={theme}>
              <OptionsBtn theme={theme} onPress={() => console.log('hi')}>Delete</OptionsBtn>
              <OptionsBtn theme={theme} onPress={() => navigation.navigate('Note', {note})}>Details</OptionsBtn>
            </Options>
          }
        </Icons>
        <Date theme={theme}>{date}</Date>
      </RightBox>
    </Container>
  )
}