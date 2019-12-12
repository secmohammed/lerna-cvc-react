import { ViewStyle } from 'react-native';
type Size = 'small' | 'default';

export default interface Props {
  title: string;
  imageSrc: string;
  size?: Size;
  containerStyle?: ViewStyle | ViewStyle[];
}
