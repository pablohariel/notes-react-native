import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`

export const Content = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 1
})`
  padding: 20px;
  color: ${({ theme }) => theme.secondary};
`

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`