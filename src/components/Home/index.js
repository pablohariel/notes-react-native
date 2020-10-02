import React from 'react';

import Header from '../Header';
import Note from './Note';
import { Container, Notes } from './styles';

export default function Home() {
  return (
    <Container>
      <Header title='My Notes' />
      <Notes>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </Notes>
    </Container>
  )
}