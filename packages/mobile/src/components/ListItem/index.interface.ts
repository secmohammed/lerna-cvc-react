import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';

export default interface ListItemProps {
  leftIcon?: React.ReactNode;
  onPressLeftIcon?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
  leftIconContainerStyle?: ViewStyle;
  title?: string;
  subTitle?: string;
  noBorder?: boolean;
  rightIcon?: React.ReactNode;
  setDetailsSectionShadow?: boolean;
}
