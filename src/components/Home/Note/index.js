import React from 'react';

import { Container, Title } from './styles';

export default function Note({ title = 'Note' }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}