import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import ButtonProps from './index.interface';
import getComponentStyle from './helpers';
import Icon from '../Icon';
import registeredStyles from '../../utils/registeredStyles';

const { useMemo } = React;

const {
  rowStyle,
  shadow,
  spaceBetweenItems,
  horizontalCenteredFlex,
  flexStyle
} = registeredStyles;

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  title,
  type,
  icon,
  size,
  iconStyle,
  disabled
}): JSX.Element => {
  const { buttonStyle, iconContainerStyle } = useMemo(
    () => getComponentStyle(type, size),
    [type, size]
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, shadow, buttonStyle, style]}
      disabled={disabled}>
      <View
        style={[
          rowStyle,
          spaceBetweenItems,
          horizontalCenteredFlex,
          flexStyle
        ]}>
        <Icon
          children={icon}
          containerStyle={[iconContainerStyle, iconStyle]}
        />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'default'
};

export default Button;
