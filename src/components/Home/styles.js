import styled from 'styled-components';
import { Note } from './Note';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`

export const Notes = styled.ScrollView`
  flex: 1;
  margin-top: 16px;
`

export const NotesBtn = styled.TouchableOpacity``

export const AddBtn = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`