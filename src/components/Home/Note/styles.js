import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../../settings/globalStyles';

export const Container = styled.View`
  height: 100px;
  border-bottom-width: 2px;
  border-bottom-color: ${secondaryColor};
  justify-content: center;
  padding: 20px;
`

export const Title = styled.Text`
  color: ${secondaryColor};
  font-size: 20px;
`