import { ViewStyle } from 'react-native';

export interface BaseProps {
  isRTL?: boolean;
  paginationContainerStyle?: ViewStyle;
  paginationDotsStyle?: ViewStyle;
}

export interface RenderItem {
  item: any;
  width: number;
}

export default interface IProps extends BaseProps {
  slides: object[];
  autoPlayTime?: number;
  containerStyle?: ViewStyle | ViewStyle[];
  renderItem?: ({ item, width }: RenderItem) => JSX.Element;
}
