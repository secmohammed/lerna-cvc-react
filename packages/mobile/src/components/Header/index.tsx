import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Props from './index.interface';
import registeredStyles from '../../utils/registeredStyles';

const { useMemo, memo } = React;
const {
  flexStyle,
  horizontalCenteredFlex,
  verticalCenteredFlex,
  spaceBetweenItems,
  rowStyle
} = registeredStyles;

const Header: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  title
}): JSX.Element => {
  const titleComponent = useMemo(() => {
    let component = title;
    if (typeof title === 'string') {
      component = <Text style={styles.titleStyle} children={title} />;
    }
    return component;
  }, [title]);

  return (
    <View style={styles.container}>
      <View
        style={[
          flexStyle,
          rowStyle,
          horizontalCenteredFlex,
          verticalCenteredFlex,
          spaceBetweenItems,
          styles.innerWrapper
        ]}>
        <View>{leftIcon}</View>

        {titleComponent}

        <View>{rightIcon}</View>
      </View>
    </View>
  );
};

export default memo(Header);
