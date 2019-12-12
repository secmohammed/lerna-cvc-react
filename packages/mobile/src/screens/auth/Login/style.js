import { StyleSheet, I18nManager, Platform } from 'react-native';
import { theme } from '../../../utils/theme';
const isRtl = I18nManager.isRtl;

const styles = StyleSheet.create({
  contentHolder: {
    height: 600,
    width: 325
  },
  inputHolder: {
    height: 65,
    width: 300,
    backgroundColor: theme.white
  },
  topShadow: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 1.3
  },
  BottomInput: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  loginBtn: {
    width: 315,
    height: 46,
    borderRadius: 23,
    marginTop: 10,
    backgroundColor: '#9cd9e4'
  },
  loginText: {
    fontSize: 16,
    letterSpacing: 0,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#ffffff'
  },
  forgotpass: {
    fontSize: 13,
    lineHeight: 16,
    // letterSpacing: 0,
    textAlign: 'center',
    marginBottom: 25,
    color: '#9a8bc2'
  },
  createAcc: {
    fontSize: 13,
    lineHeight: 16,
    // letterSpacing: 0,
    textAlign: 'center',
    color: '#9a8bc2'
  }
});

export default styles;
