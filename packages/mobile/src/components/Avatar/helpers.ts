import { StyleSheet } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { Source, Size } from './index.interface';
import styles from './styles';

export const getSrc = (source: Source) => {
  let src: any = source;
  if (typeof source === 'string') {
    src = {
      uri: src,
      cache: 'cacheOnly'
    };
  }
  return src;
};

export const getAvatarStyle = (rounded?: boolean, size?: Size) => {
  let style: ImageStyle[] = [];

  if (size) {
    style = [...style, styles[size]];
  }

  if (rounded && size) {
    const { width } = styles[size];
    const cachedStyle = StyleSheet.create({
      roundedStyle: { borderRadius: width / 2 }
    });

    style = [...style, cachedStyle.roundedStyle];
  }
  return style;
};
