import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Props from './index.interface';
import Avatar from '../../../../components/Avatar';
import Button from '../../../../components/Button';
import ChevronIcon from '../../../../components/ChevronIcon';

const AdsSpaceView: React.FC<Props> = ({ imgSrc }) => (
  <View style={styles.container}>
    <Avatar source={imgSrc} style={styles.imageStyle} />

    <Button
      title="شاهد المزيد"
      style={styles.buttonStyle}
      size="medium"
      icon={<ChevronIcon />}
    />
  </View>
);

export default React.memo(AdsSpaceView);
