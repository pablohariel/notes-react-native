import React from 'react';
import { useNavigation  } from '@react-navigation/native';

import { AntDesign, Feather } from '@expo/vector-icons';
import { Container, Title, LeftIcon, RightIcon } from './styles';

export default function Header({ title = '', type = 'burger-search' }) {

  const navigation = useNavigation();

  return (
    <Container>
      <LeftIcon>
        {type === 'burger-search' && <Feather name="menu" size={30} color="#F2F2F2" onPress={() => navigation.navigate('Note')} />}
        {type === 'arrow' && <AntDesign name="arrowleft" size={30} color="#F2F2F2" onPress={() => navigation.goBack()} />}
      </LeftIcon>
      <Title>{title}</Title>
      <RightIcon>
        {type === 'burger-search' && <AntDesign name="search1" size={26} color="#F2F2F2" />}
      </RightIcon>
    </Container>
  )
}