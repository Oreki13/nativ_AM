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
import History from '../Pages/History';
import Register from '../Pages/Auth/registrasi';
const UserStack = createStackNavigator(
  {
    User,
    Login,
    History,
    Register,
    Whislist,
    Cart,
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
  },
  {
    initialRouteName: 'HomeStack',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
