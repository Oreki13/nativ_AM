import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Pages/Category';
import User from '../Pages/User';
import ItemList from '../Pages/ItemList';
import Detail from '../Pages/Detail';
import Whislist from '../Pages/Whislist';

const UserStack = createStackNavigator(
  {
    User,
  },
  {
    initialRouteName: 'User',
    headerMode: 'none',
  },
);

const WhislistStack = createStackNavigator(
  {
    Whislist,
  },
  {
    initialRouteName: 'Whislist',
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    Home,
    ItemList,
    Detail,
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
    WhislistStack,
  },
  {
    initialRouteName: 'HomeStack',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
