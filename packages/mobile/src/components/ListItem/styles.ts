import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    minHeight: 55,
    width: '100%',
    paddingHorizontal: 12
  },
  lefContainerStyle: {
    marginEnd: 12,
    minWidth: 23
  },
  restSideStyle: {
    minHeight: 40,
    borderBottomColor: theme.gray,
    borderBottomWidth: 0.5
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: '500',
    color: theme.dark
  },
  subTitleStyle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '200',
    color: theme.gray
  }
});
