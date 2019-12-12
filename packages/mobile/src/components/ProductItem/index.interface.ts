import { ViewStyle } from 'react-native';
export default interface Props {
  useLargeSize?: boolean;
  imageSrc: string;
  name: string;
  price: string | number;
  containerStyle?: ViewStyle | ViewStyle[];
}
