import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  I18nManager,
  Text
} from 'react-native';
import FloatingLabelInput from '../../../components/FloatLabelInput';
import registeredStyles from '../../../utils/registeredStyles';
import ScreenProps from '../../../interfaces/basePage.interface';

// const backgroundImg = require('../../../assets/images/bg.png');
// const logo = require('../../../assets/images/logo.png');
const { memo, useState } = React;
const isRtl = I18nManager.isRTL;
const {
  horizontalCenteredFlex,
  flexStyle,
  verticalCenteredFlex,
  spaceBetweenItems,
  fullWidth
} = registeredStyles;
const SignUpScreen: React.FC<ScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <View>
      <Text>signup</Text>
    </View>
  );
};

// <ImageBackground
//       resizeMode="cover"
//       source={backgroundImg}
//       style={[flexStyle]}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[flexStyle]}>
//         <KeyboardAvoidingView
//           behavior="padding"
//           enabled
//           style={[flexStyle, verticalCenteredFlex, horizontalCenteredFlex]}>
//           <View>
//             <View></View>
//             <View>
//               <FloatingLabelInput
//                 label="Password"
//                 // value={state.passowrd}
//                 onChangeText={e => console.log(e)}
//               />
//               <FloatingLabelInput
//                 label="Password"
//                 // value={state.passowrd}
//                 onChangeText={e => console.log(e)}
//               />
//               <FloatingLabelInput
//                 label="Password"
//                 // value={state.passowrd}
//                 onChangeText={e => console.log(e)}
//               />
//               <FloatingLabelInput
//                 label="Password"
//                 // value={state.passowrd}
//                 onChangeText={e => console.log(e)}
//               />
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </TouchableWithoutFeedback>
//     </ImageBackground>

export default memo(SignUpScreen);
