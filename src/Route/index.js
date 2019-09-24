import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Pages/Category';
import User from '../Pages/User';
import ItemList from '../Pages/ItemList';

const UserStack = createStackNavigator(
  {
    User,
  },
  {
    initialRouteName: 'User',
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    Home,
    ItemList,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    UserStack,
  },
  {
    initialRouteName: 'UserStack',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
