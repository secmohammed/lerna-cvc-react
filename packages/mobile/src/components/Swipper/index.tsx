import React from 'react';
import {
  View,
  Dimensions,
  Platform,
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatList,
  StyleSheet
} from 'react-native';

import IProps from './swipper.interface';

import { canSlide } from './helpers';
import registeredStyles from '../../utils/registeredStyles';

const {
  useRef,
  useCallback,
  useState,
  useEffect,
  useMemo,
  memo,
  lazy,
  Suspense
} = React;
const Pagination = lazy(() => import('./Pagination'));

const { width, height } = Dimensions.get('window');

const Swipper: React.FC<IProps> = ({
  slides,
  autoPlayTime,
  isRTL,
  containerStyle,
  paginationContainerStyle,
  paginationDotsStyle,
  renderItem
}): JSX.Element => {
  const [sliderWidth, setSliderWidth] = useState(width);
  const [sliderHeight, setSliderHeight] = useState(350);
  const [activeIndex, setActiveIndex] = useState(0);

  const flatListRef = useRef({}) as any;

  const memorizedCanSlide = useCallback(canSlide, []);

  const shouldSlide = useMemo(() => memorizedCanSlide(slides), [
    memorizedCanSlide,
    slides
  ]);

  const goToSlide = useCallback(
    (pageNum: number) => {
      setActiveIndex(pageNum);
      const _ref = flatListRef.current;
      if (_ref && _ref.scrollToOffset) {
        _ref.scrollToOffset({
          offset: pageNum * sliderWidth
          // animated: true
        });
      }
    },
    [sliderWidth, activeIndex]
  );

  const _interval = useCallback(
    () =>
      setInterval(() => {
        if (shouldSlide) {
          const allLength = slides && slides.length;
          const newSlide = activeIndex === allLength - 1 ? 0 : activeIndex + 1;
          goToSlide(newSlide);
        }
      }, (autoPlayTime as number) * 1000),
    [slides, shouldSlide, goToSlide]
  );

  useEffect(() => {
    _interval();
  }, []);

  const onLayout = useCallback(() => {
    if (width !== sliderWidth || height !== sliderHeight) {
      setSliderHeight(height);
      setSliderWidth(width);
      const func = () => {
        const _ref = flatListRef.current;
        if (_ref && _ref.scrollToOffset)
          _ref.scrollToOffset({
            offset: activeIndex * width,
            animated: true
          });
      };
      return Platform.OS === 'android' ? setTimeout(func, 0) : func();
    }
  }, [setSliderWidth, activeIndex, sliderWidth, sliderHeight, setSliderHeight]);

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {
        nativeEvent: { contentOffset }
      } = event;
      const offset = contentOffset.x;
      const newIndex = Math.round(offset / sliderWidth);
      if (isRTL && !contentOffset.x) {
        setActiveIndex(0);
      } else if (activeIndex !== newIndex) {
        setActiveIndex(newIndex);
      }
    },
    [sliderWidth, activeIndex, setActiveIndex]
  );

  const _renderItem = useCallback(
    ({ item }: any) => {
      const { viewStyle } = StyleSheet.create({
        viewStyle: {
          width: sliderWidth,
          height: sliderHeight - 50
        }
      });

      return (
        <View style={viewStyle}>
          {renderItem ? renderItem({ item, width }) : null}
        </View>
      );
    },
    [sliderWidth, sliderHeight, renderItem]
  );

  return (
    <View style={[registeredStyles.flexStyle, containerStyle]}>
      <FlatList
        ref={flatListRef}
        pagingEnabled={shouldSlide}
        scrollEnabled={shouldSlide}
        horizontal
        showsHorizontalScrollIndicator={false}
        // bounces={false}
        style={registeredStyles.flexStyle}
        onLayout={onLayout}
        extraData={sliderWidth}
        data={slides}
        renderItem={_renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />

      {shouldSlide && (
        <Suspense fallback={null}>
          <Pagination
            activeIndex={activeIndex}
            handlePress={goToSlide}
            isRTL={isRTL}
            paginationContainerStyle={paginationContainerStyle}
            paginationDotsStyle={paginationDotsStyle}
            itemsLength={slides.length}
          />
        </Suspense>
      )}
    </View>
  );
};

Swipper.defaultProps = {
  autoPlayTime: 3.2
};

export default memo(Swipper);
