import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`

export const Notes = styled.ScrollView`
  flex: 1;
  margin-top: 60px;
`