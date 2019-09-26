import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Pages/Category';
import User from '../Pages/User';
import ItemList from '../Pages/ItemList';
import Detail from '../Pages/Detail';
import Whislist from '../Pages/Whislist';
import Cart from '../Pages/Cart';
import Login from '../Pages/Auth/login';
import SearchTab from '../Pages/Search';

const UserStack = createStackNavigator(
  {
    User,
    Login,
  },
  {
    initialRouteName: 'User',
    headerMode: 'none',
  },
);

const CartStack = createStackNavigator(
  {
    Cart,
  },
  {
    initialRouteName: 'Cart',
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
    SearchTab,
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
    CartStack,
  },
  {
    initialRouteName: 'HomeStack',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
