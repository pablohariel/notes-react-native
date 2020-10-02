import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { primaryColor, secondaryColor } from '../../settings/globalStyles';
 
export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  background-color: ${primaryColor};
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
`

export const Title = styled.Text`
   flex: 2;
   text-align: center;
   color: ${secondaryColor};
   font-size: 20px;
   font-weight: bold;
`

export const LeftIcon = styled.View`
  flex: 1;
  padding-left: 30px;
`

export const RightIcon = styled.View`
  flex: 1;
  flex-direction: row;
  padding-right: 30px;
  justify-content: flex-end;
`