import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.main,
    height: 50,
    width: '100%'
  },
  innerWrapper: {
    width: '93%',
    marginHorizontal: 15
  },
  titleStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: theme.white
  }
});
