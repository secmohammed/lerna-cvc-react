import React from 'react';
import dataTest from './dataTest';
import Props from './index.interface';
import styles from '../ImportantSections/styles';
import List from '../List';
import ProductItem from '../../../../components/ProductItem';

const { useCallback, memo } = React;

const ImportantSections: React.FC<Props> = ({ dataItems, title }) => {
  const renderItem = useCallback(({ item }) => {
    return (
      <ProductItem
        imageSrc={item.image}
        name={item.name}
        price={item.price}
        containerStyle={styles.sectionStyle}
      />
    );
  }, []);

  return (
    <List
      data={dataItems || dataTest}
      renderItem={renderItem}
      title={title || ''}
      buttonTitle="لمزيد"
    />
  );
};

ImportantSections.defaultProps = {
  dataItems: dataTest,
  title: 'وصل حديثا'
};

export default memo(ImportantSections);
