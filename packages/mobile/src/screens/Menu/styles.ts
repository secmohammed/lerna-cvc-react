import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.main
  },
  centeredView: {
    width: '92%',
    marginHorizontal: 20
  },
  scrollContent: {
    minHeight: '100%',
    paddingBottom: 20
  },
  closeIconContainer: {
    height: 80,
    width: '100%'
  },
  logoutTextStyle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    color: theme.white
  }
});
