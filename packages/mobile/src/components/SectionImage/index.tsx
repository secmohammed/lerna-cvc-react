import React from 'react';
import { Text, View } from 'react-native';
import Props from './index.interface';
import styles from './styles';
import Avatar from '../Avatar';

const SectionImage: React.FC<Props> = ({
  title,
  imageSrc,
  size,
  containerStyle
}) => (
  <View
    style={[
      styles.conatinerStyle,
      containerStyle,
      size === 'small' && styles.extraConatinerStyle
    ]}>
    <Avatar
      source={imageSrc}
      rounded
      size={size === 'default' ? 'large' : 'small'}
    />
    <Text style={styles.titleStyle}>{title}</Text>
  </View>
);

SectionImage.defaultProps = {
  size: 'default'
};

export default React.memo(SectionImage);
