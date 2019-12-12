import { GestureResponderEvent } from 'react-native';

export default interface IconProps {
  onPress?: (event: GestureResponderEvent) => void;
}
