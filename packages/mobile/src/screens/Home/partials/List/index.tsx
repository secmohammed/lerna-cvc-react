import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import IProps from './index.interface';
import registeredStyles from '../../../../utils/registeredStyles';
import ChevronIcon from '../../../../components/ChevronIcon';

const { memo, lazy, Suspense } = React;
const Button = lazy(() => import('../../../../components/Button'));

const {
  flexStyle,
  rowStyle,
  spaceBetweenItems,
  horizontalCenteredFlex,
  verticalCenteredFlex
} = registeredStyles;

const List: React.FC<IProps> = ({
  data,
  renderItem,
  containerStyle,
  title,
  buttonTitle
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          flexStyle,
          rowStyle,
          verticalCenteredFlex,
          styles.headerSectionStyle,
          !!buttonTitle ? spaceBetweenItems : horizontalCenteredFlex
        ]}>
        {!!buttonTitle && (
          <Suspense fallback={null}>
            <Button title="المزيد" icon={<ChevronIcon />} />
          </Suspense>
        )}
        <Text style={styles.headerTxtStyle} children={title} />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        style={styles.flatListStyle}
        shouldRasterizeIOS
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(List);
