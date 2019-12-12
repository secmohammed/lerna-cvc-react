import React from 'react';
import { StatusBar } from 'react-native';
import theme from './src/utils/theme';
import AppRoutes from './src/routes';

const App: React.FC<{}> = (): JSX.Element => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={theme.main} />
    <AppRoutes />
  </>
);

export default App;
