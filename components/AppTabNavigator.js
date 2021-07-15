import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';
import ClassRooms from '../screens/ClassRooms'


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: ClassRooms,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "one",
    }
  },
  two:{
    screen:BookRequestScreen
  },
  three:{
    screen:BookRequestScreen
  },
  four:{
    screen:BookRequestScreen
  }
});
