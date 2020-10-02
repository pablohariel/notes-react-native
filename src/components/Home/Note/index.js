import React from 'react';

import { Container, Title } from './styles';

export default function Note({ title = 'Note', theme }) {
  return (
    <Container theme={theme}>
      <Title theme={theme}>{title}</Title>
    </Container>
  )
}