import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { Container, Title, RightBox, LeftBox, Info, Date, Icons } from './styles';

export default function Note({ title = 'Note', theme }) {
  return (
    <Container theme={theme}>
      <LeftBox>
        <Title theme={theme}>{title}</Title>
        <Info theme={theme}>This is a note to...</Info>
      </LeftBox>
      <RightBox>
        <Icons>
          <AntDesign name="staro" size={24} color={theme.secondary} />
          <FontAwesome5 name="ellipsis-v" size={24} color={theme.secondary} />
        </Icons>
        <Date theme={theme}>10/10/1997</Date>
      </RightBox>
    </Container>
  )
}