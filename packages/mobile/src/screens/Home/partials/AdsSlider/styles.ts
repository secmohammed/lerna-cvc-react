import { StyleSheet } from 'react-native';
import theme from '../../../../utils/theme';

export default StyleSheet.create({
  imgStyle: {
    borderRadius: 10,
    height: 190,
    overflow: 'hidden'
  },
  container: {
    position: 'relative',
    top: 5,
    overflow: 'hidden',
    height: 190,
    maxHeight: 190,
    backgroundColor: theme.lightGray,
    borderRadius: 10,
    width: '93%',
    marginHorizontal: 15
  }
});
