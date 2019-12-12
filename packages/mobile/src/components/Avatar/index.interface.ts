import React from 'react';
import { ViewStyle } from 'react-native';
import FastImage, {
  FastImageSource,
  ImageStyle
} from 'react-native-fast-image';

export type Size = 'small' | 'medium' | 'large' | 'xlarge';

export type Source = FastImageSource | string;

export type ResizeMode =
  | FastImage.resizeMode.contain
  | FastImage.resizeMode.cover
  | FastImage.resizeMode.stretch
  | FastImage.resizeMode.center;

export default interface AvatarProps {
  size?: Size;
  source: Source;
  style?: ImageStyle | (ImageStyle | any)[] | ViewStyle | ViewStyle[];
  tintColor?: string;
  rounded?: boolean;
  resizeMode?: ResizeMode;
  children?: React.ReactNode;
}
