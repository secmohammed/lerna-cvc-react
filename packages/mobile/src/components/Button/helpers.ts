import styles from './styles';
import { ButtonType, Size } from './button.interface';

type StyleProp = { backgroundColor: string };

interface StyleType {
  iconStyle: StyleProp;
  buttonStyle: StyleProp;
}

export const getStylesPerType = (type?: ButtonType): StyleType => {
  let iconStyle = styles.mainByStyle,
    buttonStyle = styles.whiteBgStyle;
  if (type) {
    if (type === 'reversed-default') {
      iconStyle = styles.whiteBgStyle;
      buttonStyle = styles.mainByStyle;
    } else if (type === 'secondary') {
      iconStyle = styles.whiteBgStyle;
      buttonStyle = styles.grayBgStyle;
    } else if (type === 'reversed-secondary') {
      iconStyle = styles.grayBgStyle;
      buttonStyle = styles.whiteBgStyle;
    }
  }
  return {
    iconStyle,
    buttonStyle
  };
};

export default (type?: ButtonType, size?: Size) => {
  const { iconStyle, buttonStyle } = getStylesPerType(type);
  let iconSizeStyle = styles.defaultIconStyle,
    buttonSizeStyle = styles.defaultStyle;
  if (size) {
    if (size === 'medium') {
      iconSizeStyle = styles.meduimIconStyle;
      buttonSizeStyle = styles.mediumStyle;
    } else if (size === 'large') {
      iconSizeStyle = styles.largeIconStyle;
      buttonSizeStyle = styles.largeStyle;
    } else if (size === 'fullWidth') {
      iconSizeStyle = styles.fullWidthIconStyle;
      buttonSizeStyle = styles.fullWidthStyle as any;
    }
  }

  return {
    iconContainerStyle: [iconSizeStyle, iconStyle],
    buttonStyle: [buttonSizeStyle, buttonStyle]
  };
};
