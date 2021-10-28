import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import InsulinGraphScreen from "../screens/insulinGraphScreen"
import DiabmedicineScreen from "../screens/DiabMedicineDataScreen"
import SugarTestGraph from '../screens/SugarGraph'
import InsulinDataScreen from '../screens/InsulinDataScreen'
import SugarTestDataScreen from '../screens/SugarTestDataScreen'


export const DiabdataNavigator = createBottomTabNavigator({

   InsulinGraphScreen: {
    screen:InsulinGraphScreen,
    navigationOptions: {
      tabBarLabel: 'InsulinGraph',
    },
    
  },
   InsulinDataScreen: {
    screen:InsulinDataScreen,
    navigationOptions: {
      tabBarLabel: 'Insulin',
    },
    
  },

  DiabmedicineScreen: {
    screen:DiabmedicineScreen,
    navigationOptions: {
      tabBarLabel: 'Medicine',
    },
    
  },

   SugarTestGraph: {
    screen:SugarTestGraph,
    navigationOptions: {
      tabBarLabel: 'SugarGraph',
    },
    
  },
 
  SugarTestDataScreen: {
    screen:SugarTestDataScreen,
    navigationOptions: {
      tabBarLabel: 'SugarTest',
    },
    
  },

    

});
