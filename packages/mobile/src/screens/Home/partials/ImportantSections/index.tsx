import React from 'react';
import dataTest from './dataTest';
import Props from './index.interface';
import styles from './styles';
import List from '../List';
import SectionItem from '../../../../components/SectionImage';
import registeredStyles from '../../../../utils/registeredStyles';

const { useCallback, memo } = React;

const ImportantSections: React.FC<Props> = ({ dataItems }) => {
  const renderItem = useCallback(({ item }) => {
    return (
      <SectionItem
        imageSrc={item.image}
        title={item.name}
        containerStyle={styles.sectionStyle}
      />
    );
  }, []);

  return (
    <List
      data={dataItems || dataTest}
      containerStyle={[registeredStyles.shadow, styles.container]}
      renderItem={renderItem}
      title="اهم الاقسام"
    />
  );
};

ImportantSections.defaultProps = {
  dataItems: dataTest
};

export default memo(ImportantSections);
