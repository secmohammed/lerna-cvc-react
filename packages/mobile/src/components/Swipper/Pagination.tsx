import React from 'react';
import { View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import styles from './styles';
import PaginationProps from './pagination.interface';
import registeredStyles from '../../utils/registeredStyles';

const { useCallback, memo } = React;

const Pagination: React.FC<PaginationProps> = ({
  paginationContainerStyle,
  paginationDotsStyle,
  isRTL,
  itemsLength,
  handlePress,
  activeIndex
}): JSX.Element => {
  let dots: string[] = [];

  for (let i = 0; i < itemsLength; i++) {
    dots = [...dots, i.toString()];
  }

  const handleDotPressed = useCallback(
    (idx: number) => (event: GestureResponderEvent) => {
      if (handlePress) handlePress(idx);
    },
    [handlePress]
  );

  return (
    <View
      style={[
        registeredStyles.flexStyle,
        styles.paginationContainer,
        paginationContainerStyle
      ]}>
      <View
        style={[
          styles.paginationDots,
          isRTL ? registeredStyles.rtlRowStyle : registeredStyles.rowStyle,
          registeredStyles.verticalCenteredFlex,
          registeredStyles.horizontalCenteredFlex,
          paginationDotsStyle
        ]}>
        {dots.map(item => (
          <TouchableOpacity
            key={item}
            onPress={handleDotPressed(+item)}
            style={[
              styles.dot,
              activeIndex === +item ? styles.activeDotStyle : styles.dotStyle
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default memo(Pagination);
