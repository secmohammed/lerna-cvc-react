import { ViewStyle } from 'react-native';

export default interface ListProps {
  renderItem: (item: any) => JSX.Element;
  data: any[];
  containerStyle?: ViewStyle | ViewStyle[];
  title: string;
  buttonTitle?: string;
}
