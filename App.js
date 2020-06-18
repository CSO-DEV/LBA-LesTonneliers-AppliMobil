//Import des dépendances
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// Import des components
import Accueil from './components/accueil/Accueil';
import Apropos from './components/aPropos/Apropos';
import Contact from './components/contact/Contact';
import Detail from './components/detail/Detail';
import SplashScreen from './components/splashScreen/SplashScreen';
import Login from './components/auth/Login';
import PassWord from './components/auth/PassWord';
import SignIn from './components/auth/SignIn';

/*
 * Navigation initiale Switch
 */
const TabAuth = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      PassWord: PassWord,
      SignIn: SignIn,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);

/*
 * Navigation Tab
 */
const tabNavig = createBottomTabNavigator(
  {
    Accueil: Accueil,
    Contact: Contact,
    Apropos: Apropos,
    Login: TabAuth,
  },
  {
    initialRouteName: 'Accueil',
    tabBarOptions: {
      activeTintColor: 'rgb(148, 23, 30)',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#d4d4d4',
      inactiveBackgroundColor: 'ivory',
      labelStyle: {fontSize: 20},
      tabStyle: {
        justifyContent: 'center',
      },
      showIcon: false,
    },
  },
);

/*
 * Navigation initiale Switch
 */
const App = createAppContainer(
  createSwitchNavigator(
    {
      App: tabNavig,
      Loading: SplashScreen,
      Detail: Detail,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
export default App;

/*/**
 * Drawer navigator
 * 2nd niveau

const appDrawer = createDrawerNavigator(
  {
    Home: Home,
    Forecast: Forecast,
  },
  {
    initialRouteName: "Home",
  }
);

/**
 * Switch navigator
 * 1er niveau

const App = createAppContainer(
  createSwitchNavigator(
    {
      App: appDrawer,
      Loading: Splashscreen,
      Auth: Login,
    },
    {
      initialRouteName: "App",
    }
  )
);
*/
