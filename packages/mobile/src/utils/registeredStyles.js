import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  flexStyle: {
    flex: 1
  },
  verticalCenteredFlex: {
    justifyContent: 'center'
  },
  selfCentered: {
    alignSelf: 'center'
  },
  horizontalCenteredFlex: {
    alignItems: 'center'
  },
  spaceBetweenItems: {
    justifyContent: 'space-between'
  },
  wrapedFlex: {
    flexWrap: 'wrap'
  },
  noWrapStyle: {
    flexWrap: 'nowrap'
  },
  rowStyle: {
    flexDirection: 'row'
  },
  rtlRowStyle: {
    flexDirection: 'row-reverse'
  },
  flexStartStyle: {
    justifyContent: 'flex-start'
  },
  selfStart: {
    alignSelf: 'flex-start'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 4,
    backgroundColor: theme.white
  }
});
