import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  I18nManager,
  Image,
  Text
} from 'react-native';
import FloatingLabelInput from '../../../components/FloatLabelInput';
import ScreenProps from '../../../interfaces/basePage.interface';
import registeredStyles from '../../../utils/registeredStyles';
import styles from './style';

// const backgroundImg = require('../../../assets/images/bg.png');
// const logo = require('../../../assets/images/logo.png');
const { memo, useState } = React;
// const isRtl = I18nManager.isRTL;
const {
  horizontalCenteredFlex,
  flexStyle,
  verticalCenteredFlex,
  spaceBetweenItems
} = registeredStyles;

const LoginScreen: React.FC<ScreenProps> = ({ navigation }): JSX.Element => {
  console.log(navigation);
  const [state, setState] = useState({
    email: undefined,
    passowrd: undefined
  });
  return (
    <View>
      <Text>login</Text>
    </View>
  );
};

export default memo(LoginScreen);

// <ImageBackground
//       resizeMode="cover"
//       source={backgroundImg}
//       style={[flexStyle]}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[flexStyle]}>
//         <KeyboardAvoidingView
//           behavior="padding"
//           enabled
//           style={[flexStyle, verticalCenteredFlex, horizontalCenteredFlex]}>
//           <View
//             style={[
//               styles.contentHolder,
//               horizontalCenteredFlex,
//               spaceBetweenItems
//             ]}>
//             <Image source={logo} style={{ width: 250, height: 250 }} />
//             <View style={[horizontalCenteredFlex]}>
//               <View
//                 style={[
//                   styles.inputHolder,
//                   styles.topShadow,
//                   registeredStyles.shadowStyle
//                 ]}>
//                 {/* <LoginSvg /> */}
//                 <FloatingLabelInput
//                   label="Email"
//                   value={state.email}
//                   onChangeText={e => console.log(e)}
//                   // style={}
//                 />
//               </View>
//               <View style={[styles.inputHolder, styles.BottomInput]}>
//                 <FloatingLabelInput
//                   label="Password"
//                   value={state.passowrd}
//                   onChangeText={e => console.log(e)}
//                 />
//               </View>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('Home')}
//                 style={[
//                   styles.loginBtn,
//                   verticalCenteredFlex,
//                   horizontalCenteredFlex
//                 ]}>
//                 <Text style={styles.loginText}>Login</Text>
//                 <Text
//                   style={{
//                     alignSelf: 'flex-start',
//                     width: 28.8,
//                     height: 29.6,
//                     borderRadius: 24,
//                     backgroundColor: '#ffffff',
//                     overflow: 'hidden'
//                   }}>
//                   ...
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <View>
//               <Text style={styles.forgotpass}>Forgot Password</Text>
//               <Text style={styles.createAcc}>Create Account</Text>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </TouchableWithoutFeedback>
//     </ImageBackground>
