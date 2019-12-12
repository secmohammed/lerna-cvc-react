import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/auth/Login';
import SignUpScreen from './screens/auth/SignUp';
import HomeScreen from './screens/Home';
import MenuScreen from './screens/Menu';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    SignUp: {
      screen: SignUpScreen
    }
  },
  {
    headerMode: 'none'
  }
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Menu: {
      screen: MenuScreen
    }
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'App' // Auth
    }
  )
);
