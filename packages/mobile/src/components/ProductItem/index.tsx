import React from 'react';
import { View, Text } from 'react-native';
import Props from './index.interface';
import styles from './styles';
import Avatar from '../Avatar';
import registeredStyles from '../../utils/registeredStyles';

const { memo } = React;

const priceImag = require('../../assets/images/price.png');

const { flexStyle, rowStyle } = registeredStyles;

const ProductItem: React.FC<Props> = ({
  useLargeSize,
  imageSrc,
  price,
  name,
  containerStyle
}): JSX.Element => {
  return (
    <View
      style={[
        styles.conatinerStyle,
        registeredStyles.shadow,
        useLargeSize && styles.largeSize,
        containerStyle
      ]}>
      <Avatar source={imageSrc} style={[styles.avatarStyle]} />
      <Text style={styles.prodNameStyle}>{name}</Text>
      <View style={[flexStyle, rowStyle]}>
        <Avatar source={priceImag} style={styles.priceImgStyle} />
        <Text style={styles.prodPriceStyle}>{price}</Text>
      </View>
    </View>
  );
};

export default memo(ProductItem);
