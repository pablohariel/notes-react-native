import styled from 'styled-components';

export const Container = styled.View`
  height: 110px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.secondary};
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  flex-direction: row;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.secondary};
  font-size: 20px;
`

export const Info = styled.Text`
  color: ${({theme}) => theme.secondary};
  font-size: 12px;
`

export const Date = styled.Text`
  color: ${({theme}) => theme.secondary};
  font-size: 12px;
`

export const LeftBox = styled.View`
  height: 60%;
  justify-content: space-between;
`

export const RightBox = styled.View`
  height: 60%;
  justify-content: space-between;
`

export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`