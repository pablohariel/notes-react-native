import React from 'react';
import { useNavigation  } from '@react-navigation/native';

import { AntDesign, Feather } from '@expo/vector-icons';
import { Container, Title, LeftIcon, RightIcon, TitleEditable } from './styles';

export default function Header({ title = '', setTitle, type = 'burger-search', theme = {primary: '#2F3437', secondary: '#F2F2F2'}, changeTheme }) {
  const navigation = useNavigation();

  return (
    <Container theme={theme}>
      <LeftIcon>
        {type === 'burger-search' && <Feather name="menu" size={30} color={theme.secondary} onPress={() => navigation.navigate('Note')} />}
        {type === 'arrow-edit' && <AntDesign name="arrowleft" size={30} color={theme.secondary} onPress={() => navigation.goBack()} />}
      </LeftIcon>
      {type === 'burger-search' && <Title theme={theme}>{title}</Title>} 
      {type === 'arrow-edit' && <TitleEditable theme={theme} value={title} onChangeText={value => setTitle(value)} />} 
      <RightIcon>
        {type === 'burger-search' && <AntDesign name="search1" size={26} color={theme.secondary} onPress={changeTheme} />}
      </RightIcon>
    </Container>
  )
}