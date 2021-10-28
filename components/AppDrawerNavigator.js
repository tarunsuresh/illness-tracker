import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DiabTabNavigator } from './DiabTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import { BPTabNavigator } from './BPTabNavigator';
import { BpDataNavigator } from './BpDataNavigator';
import { DiabdataNavigator } from './DiabDataNavigatior';
import MapsScreen  from '../screens/MapsScreen';


export const AppDrawerNavigator = createDrawerNavigator(
  {
    Diabeties: {
      screen: DiabTabNavigator,
    },

    BloodPressure: {
      screen: BPTabNavigator,
    },
    DiabData: {
      screen: DiabdataNavigator,
    },
    BpData: {
      screen: BpDataNavigator,
    },
    Map: {
      screen: MapsScreen,
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Diabeties',
  }
);
