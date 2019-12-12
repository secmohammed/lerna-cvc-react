import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Props from './index.interface';
import styles from './styles';
import registeredSTyles from '../../utils/registeredStyles';

const { lazy, Suspense } = React;

const IconContainter = lazy(() => import('../Icon'));
const Chevron = lazy(() => import('../ChevronIcon'));

const {
  rowStyle,
  spaceBetweenItems,
  horizontalCenteredFlex,
  flexStyle,
  shadow,
  verticalCenteredFlex
} = registeredSTyles;

const ListItem: React.FC<Props> = ({
  leftIcon,
  onPressLeftIcon,
  onPress,
  containerStyle,
  leftIconContainerStyle,
  title,
  noBorder,
  rightIcon,
  subTitle,
  setDetailsSectionShadow
}): JSX.Element => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          rowStyle,
          spaceBetweenItems,
          horizontalCenteredFlex,
          verticalCenteredFlex,
          flexStyle
        ]}>
        <TouchableOpacity
          style={[styles.lefContainerStyle, leftIconContainerStyle]}
          onPress={onPressLeftIcon || onPress}>
          {leftIcon}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPress}
          style={[
            rowStyle,
            spaceBetweenItems,
            flexStyle,
            horizontalCenteredFlex,
            setDetailsSectionShadow && shadow,
            !noBorder && styles.restSideStyle
          ]}>
          <View>
            <Text style={styles.titleStyle} children={title} />
            {!!subTitle && (
              <Text style={styles.subTitleStyle} children={subTitle} />
            )}
          </View>

          {rightIcon || (
            <Suspense fallback={null}>
              <IconContainter>
                <Chevron />
              </IconContainter>
            </Suspense>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(ListItem);
