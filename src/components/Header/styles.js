import React from 'react';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  background-color: #2F3437;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`

export const Title = styled.Text`
   flex: 2;
   text-align: center;
   color: #F2F2F2;
   font-size: 20px;
`

export const LeftIcon = styled.View`
  flex: 1;
  padding-left: 20px;
`

export const RightIcon = styled.View`
  flex: 1;
  flex-direction: row;
  padding-right: 20px;
  justify-content: flex-end;
`