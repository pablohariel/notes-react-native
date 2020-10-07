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
  margin-bottom: ${({ index, lastKey }) => index === lastKey ? '110px' : '0px'};
  z-index: 2;
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

export const FavoriteBtn = styled.View`
  flex: 1;
`

export const EllipsisBtn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`

export const Options = styled.View`
  position: absolute;
  height: 300%;
  width: 100px
  background-color: ${({theme}) => theme.secondary};
  right: 30px;
  top: -20px;
  z-index: 1;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
`

export const OptionsBtn = styled.Text`
  color: ${({theme}) => theme.primary};
  font-size: 15px;
`