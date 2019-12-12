import React from 'react';
import { ViewStyle, GestureResponderEvent } from 'react-native';

/**
 *@param type default => white * main /
 *@param type reversed-default =>  main * white
 *@param type secondary: lieghtGray * white
 *@param type reversed-secondary:  white * lieghtGray
 */

export type ButtonType =
  | 'default'
  | 'reversed-default'
  | 'secondary'
  | 'reversed-secondary';

export type Size = 'default' | 'medium' | 'large' | 'fullWidth';

export default interface ButtonProps {
  style?: ViewStyle | ViewStyle[];
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  type?: ButtonType;
  size?: Size;
  iconStyle?: ViewStyle | ViewStyle[];
  icon?: React.ReactNode;
  disabled?: boolean;
}
