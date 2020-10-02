import styled from 'styled-components';

export const Container = styled.View`
  height: 100px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.secondary};
  justify-content: center;
  padding: 20px;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.secondary};
  font-size: 20px;
`