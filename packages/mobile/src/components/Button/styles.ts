import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },

  whiteBgStyle: {
    backgroundColor: theme.white
  },

  mainByStyle: {
    backgroundColor: theme.main
  },

  grayBgStyle: {
    backgroundColor: theme.lightGray
  },

  defaultStyle: {
    minWidth: 95,
    width: 100,
    height: 37,
    borderRadius: 18.5
  },

  mediumStyle: {
    minWidth: 120,
    width: 125,
    height: 39,
    borderRadius: 18.5
  },

  largeStyle: {
    minWidth: 125,
    width: 130,
    height: 41,
    borderRadius: 20.5
  },

  fullWidthStyle: {
    minWidth: '100%',
    width: '100%',
    height: 48,
    borderRadius: 24
  },

  textStyle: {
    color: theme.blueGray,
    fontSize: 16,
    textAlign: 'center',
    width: '70%'
  },

  defaultIconStyle: {
    width: 28,
    height: 30,
    borderRadius: 15
  },

  meduimIconStyle: {
    width: 28,
    height: 29,
    borderRadius: 14
  },

  largeIconStyle: {
    width: 33,
    height: 33,
    borderRadius: 12
  },

  fullWidthIconStyle: {
    width: 35,
    height: 35,
    borderRadius: 12.5
  }
});
