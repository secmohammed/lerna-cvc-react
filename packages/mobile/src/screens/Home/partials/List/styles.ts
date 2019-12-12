import { StyleSheet } from 'react-native';
import theme from '../../../../utils/theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 180,
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  headerSectionStyle: {
    width: '100%',
    marginVertical: 15,
    height: 30
  },
  headerTxtStyle: {
    color: theme.main,
    fontSize: 19,
    fontWeight: '700'
  },
  flatListStyle: {
    width: '100%'
  }
});
