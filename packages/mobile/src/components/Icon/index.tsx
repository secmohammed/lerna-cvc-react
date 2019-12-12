import React from 'react';
import { View } from 'react-native';
import styles from './style';
import IProps from './icon.interface';
import registeredStyles from '../../utils/registeredStyles';

const { memo } = React;
const {
  horizontalCenteredFlex,
  verticalCenteredFlex,
  shadow
} = registeredStyles;

const Icon: React.FC<IProps> = ({
  component,
  containerStyle,
  children
}): JSX.Element => {
  let Component: any = component || View;

  return (
    <Component
      style={[
        shadow,
        styles.container,
        horizontalCenteredFlex,
        verticalCenteredFlex,
        containerStyle && containerStyle
      ]}>
      {children}
    </Component>
  );
};

Icon.defaultProps = {
  component: View
};
export default memo(Icon);
