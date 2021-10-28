import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapsScreen from '../screens/MapsScreen';


export const DiabTabNavigator = createBottomTabNavigator({

  MapsScreen: {
    screen: MapsScreen,
    navigationOptions: {
      tabBarLabel: 'Maps',
    },
  },
  //InsulinGraphScreen: {
  //screen:InsulinGraphScreen,
  //navigationOptions: {
  //tabBarLabel: 'InsulinGraph',
  //},
  //},
});
