import React from 'react';
import styles from './styles';
import IProps from './index.interface';
import dataTest from './dataTest';
import registeredStyles from '../../../../utils/registeredStyles';
import Avatar from '../../../../components/Avatar';
import Swipper from '../../../../components/Swipper';
import { RenderItem } from '../../../../components/Swipper/swipper.interface';

const renderItem = ({ width, item }: RenderItem): JSX.Element => (
  <Avatar source={item.image} style={[styles.imgStyle, { width }]} />
);

const AdsSlider: React.FC<IProps> = ({ dataItems }) => (
  <Swipper
    containerStyle={[
      registeredStyles.selfCentered,
      registeredStyles.shadow,
      styles.container
    ]}
    slides={dataItems ? dataItems : dataTest}
    renderItem={renderItem}
  />
);

AdsSlider.defaultProps = {
  dataItems: dataTest
};

export default React.memo(AdsSlider);
