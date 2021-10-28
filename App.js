import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { DiabTabNavigator } from './components/DiabTabNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
   Drawer:{screen: AppDrawerNavigator},
  BottomTab:{screen: DiabTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
