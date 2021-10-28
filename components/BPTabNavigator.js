import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PressureScreen from '../screens/PressureScreen';
import BPMedicineScreen from '../screens/BPMedicineScreen';
//import BloodPressureGraphScreen from "../screens/PressureGraphScreen"



export const BPTabNavigator = createBottomTabNavigator({
  Pressure : {
    screen: PressureScreen,
    navigationOptions :{
     
      tabBarLabel : "pressure",
    }
  },
  BPMedicine: {
    screen: BPMedicineScreen,
    navigationOptions :{
     
      tabBarLabel : "BPMedicine",
    }
  },
  // BloodPressureGraph: {
    //screen:BloodPressureGraphScreen ,
    //navigationOptions :{
     
      //tabBarLabel : "BloodPressureGraph",
    //}
  //},
});
