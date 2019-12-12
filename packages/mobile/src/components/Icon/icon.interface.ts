import React from 'react';
import { ViewStyle } from 'react-native';

export default interface IconProps {
  component?: React.ReactNode;
  children?: React.ReactNode;
  containerStyle?: ViewStyle | (ViewStyle | any)[];
}
