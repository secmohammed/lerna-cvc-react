import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import ListItem from '../../../../components/ListItem';
import Avatar from '../../../../components/Avatar';
import SettingIcon from '../../../../components/SettingIcon';
import registeredStyles from '../../../../utils/registeredStyles';

const userImage = require('../../../../assets/images/userImage.jpg');
const { shadow, verticalCenteredFlex } = registeredStyles;

const UserItem: React.FC<{}> = (): JSX.Element => (
  <TouchableOpacity style={[shadow, verticalCenteredFlex, styles.conatainter]}>
    <ListItem
      leftIcon={<Avatar rounded size="medium" source={userImage} />}
      title="Ahmed Nassar"
      subTitle="nassarahmed750@gmail.com"
      noBorder
      rightIcon={<SettingIcon />}
    />
  </TouchableOpacity>
);

export default React.memo(UserItem);
