import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import ViewRoutesProps from './viewRoutes.interface';
import ListItem from '../../../../components/ListItem';
import registeredStyles from '../../../../utils/registeredStyles';

const { shadow } = registeredStyles;

const ViewRoutes: React.FC<ViewRoutesProps> = ({ routes }): JSX.Element => (
  <View style={[shadow, styles.conatainter]}>
    {routes.map(({ title, Icon }, idx) => (
      <ListItem
        key={title}
        title={title}
        noBorder={routes.length - 1 === idx}
        leftIcon={<Icon />}
      />
    ))}
  </View>
);

export default React.memo(ViewRoutes);
