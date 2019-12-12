import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 12
  },
  paginationDots: {
    height: 16,
    marginBottom: 10,
    marginLeft: 0,
    justifyContent: 'flex-start'
  },
  dot: {
    width: 13,
    height: 12,
    borderRadius: 6.5,
    marginHorizontal: 4
  },
  activeDotStyle: {
    backgroundColor: theme.main,
    width: 20
  },
  dotStyle: {
    backgroundColor: theme.blueGray
  }
});
