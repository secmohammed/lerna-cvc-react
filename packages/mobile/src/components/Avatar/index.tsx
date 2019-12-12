import React from 'react';
import FastImage from 'react-native-fast-image';
import Props from './index.interface';
import { getSrc, getAvatarStyle } from './helpers';

const { memo, useMemo } = React;

const Avatar: React.FC<Props> = ({
  size,
  style,
  rounded,
  source,
  tintColor,
  resizeMode,
  children
}): JSX.Element => {
  const sourceProps = useMemo(() => getSrc(source), [source]);
  const styles = useMemo(() => getAvatarStyle(rounded, size), [size, rounded]);

  return (
    <FastImage
      style={[styles, style]}
      source={sourceProps}
      resizeMode={resizeMode}
      tintColor={tintColor}
      children={children}
    />
  );
};

Avatar.defaultProps = {
  size: 'medium',
  resizeMode: 'cover'
};

export default memo(Avatar);
