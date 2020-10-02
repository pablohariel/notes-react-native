import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../settings/globalStyles';

export const Container = styled.View`
  flex: 1;
  background-color: ${primaryColor}
`

export const Notes = styled.ScrollView`
  flex: 1;
  margin-top: 60px;
`