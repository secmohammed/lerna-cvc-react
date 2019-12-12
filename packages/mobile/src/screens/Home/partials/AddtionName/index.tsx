import React from 'react';
import Props from '../RecentrlyArrivied/index.interface';
import dataTest from '../RecentrlyArrivied/dataTest';
import ListView from '../RecentrlyArrivied';

const AddtionName: React.FC<Props> = ({ dataItems }) => (
  <ListView dataItems={dataItems || dataTest} title="اسم الاضافات" />
);

AddtionName.defaultProps = {
  dataItems: dataTest
};

export default React.memo(AddtionName);
