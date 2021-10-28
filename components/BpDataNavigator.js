import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PressureGraphScreen from '../screens/PressureGraphScreen';
import BpMedcineDataScreen from '../screens/BpMedicineDataScreen';
import PressureDataScreen from '../screens/PressureDataScreen';


export const BpDataNavigator = createBottomTabNavigator({
  PressureGraphScreen: {
    screen: PressureGraphScreen,
    navigationOptions: {
      tabBarLabel: 'PressureData',
    },
  },
  BpMedcineDataScreen: {
    screen: BpMedcineDataScreen,
    navigationOptions: {
      tabBarLabel: 'BpMedicineData',
    },
  },
   PressureDataScreen: {
    screen: PressureDataScreen,
    navigationOptions: {
      tabBarLabel: 'PressureData',
    },
  },
});
