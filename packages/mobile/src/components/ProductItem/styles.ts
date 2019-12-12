import { StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  conatinerStyle: {
    padding: 7,
    borderRadius: 5,
    width: 167,
    height: 208
  },
  largeSize: {
    width: 260,
    height: 260
  },
  avatarStyle: {
    width: '100%',
    height: 127
  },
  prodNameStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.main,
    marginVertical: 6
  },
  prodPriceStyle: {
    fontSize: 15,
    fontWeight: '200',
    color: theme.lightGray
  },
  priceImgStyle: {
    width: 20,
    height: 20,
    marginEnd: 5
  }
});
