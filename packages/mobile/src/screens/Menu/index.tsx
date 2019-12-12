import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import UserItemView from './partials/UserItem';
import PagesSections from './partials/PagesSection';
import registeredStyles from '../../utils/registeredStyles';
import ScreenProps from '../../interfaces/basePage.interface';
import CancelIcon from '../../components/CancelIcon';

const { memo, useCallback } = React;
const { flexStyle, verticalCenteredFlex } = registeredStyles;

const MenuScreen: React.FC<ScreenProps> = ({ navigation }): JSX.Element => {
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  const goToSignIn = useCallback(() => navigation.navigate('Login'), [
    navigation
  ]);

  return (
    <View style={[flexStyle, styles.container]}>
      <View style={styles.centeredView}>
        <View style={[styles.closeIconContainer, verticalCenteredFlex]}>
          <CancelIcon onPress={goBack} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          scrollEnabled
          showsVerticalScrollIndicator>
          <UserItemView />
          <PagesSections />

          <Text onPress={goToSignIn} style={styles.logoutTextStyle}>
            LogOut
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(MenuScreen);
