import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import InsulinScreen from '../screens/InsulinScreen';
import DiabMedicineScreen from '../screens/DiabMedicineScreen';
import SugarTestScreen from "../screens/SugarTestScreen";
//import InsulinGraphScreen from "../screens/insulinGraphScreen"

export const DiabTabNavigator = createBottomTabNavigator({
  Insulin: {
    screen: InsulinScreen,
    navigationOptions: {
      tabBarLabel: 'Insulin',
    },
  },
  Medicine: {
    screen: DiabMedicineScreen,
    navigationOptions: {
      tabBarLabel: 'Medicine',
    },
  },
  SugarTest: {
    screen: SugarTestScreen,
    navigationOptions: {
      tabBarLabel: 'SugarTest',
    },
  },
  //InsulinGraphScreen: {
  //screen:InsulinGraphScreen,
  //navigationOptions: {
  //tabBarLabel: 'InsulinGraph',
  //},
  //},
});
