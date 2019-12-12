import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import AdsSlider from './partials/AdsSlider';
import ImportantSections from './partials/ImportantSections';
import RecentrlyArrivied from './partials/RecentrlyArrivied';
import AddtionName from './partials/AddtionName';
import AdsSpaceView from './partials/AddSpace';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import MenuIcon from '../../components/MenuIcon';
import registeredStyles from '../../utils/registeredStyles';
import ScreenProps from '../../interfaces/basePage.interface';

const { memo, useCallback } = React;
const { flexStyle } = registeredStyles;

const Ads_1 = require('../../assets/images/adsSpace1.jpg');
const Ads_2 = require('../../assets/images/adsSpace2.jpg');
const homeBkg = require('../../assets/images/homeBkg.png');

const HomeScreen: React.FC<ScreenProps> = ({ navigation }): JSX.Element => {
  const handleClickMenu = useCallback(() => navigation.navigate('Menu'), [
    navigation
  ]);

  return (
    <View style={[flexStyle, styles.container]}>
      <Header rightIcon={<MenuIcon onPress={handleClickMenu} />} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        scrollEnabled
        showsVerticalScrollIndicator>
        <Avatar source={homeBkg} style={styles.imageStyle}>
          <AdsSlider />
        </Avatar>
        <ImportantSections />
        <View style={styles.centeredView}>
          <RecentrlyArrivied />
          <AdsSpaceView imgSrc={Ads_1} />
          <AddtionName />
          <AdsSpaceView imgSrc={Ads_2} />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);
