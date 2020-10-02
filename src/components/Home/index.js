import React, { useState } from 'react';

import { themes } from '../../settings/globalStyles';
import Header from '../Header';
import Note from './Note';
import { Container, Notes } from './styles';

export default function Home() {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = () => {
    if(theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark)
    }
  }

  return (
    <Container theme={theme}>
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
    </Container>
  )
}