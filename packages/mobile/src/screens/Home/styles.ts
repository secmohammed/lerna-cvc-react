import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.background
  },
  scrollContent: {
    minHeight: '100%',
    paddingBottom: 20
  },
  centeredView: {
    width: '93%',
    marginHorizontal: 15
  },
  imageStyle: {
    width: '100%',
    height: 280,
    backgroundColor: theme.white
  },
  memuIconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.white
  }
});
