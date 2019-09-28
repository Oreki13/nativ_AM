import React, {Fragment, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Thumbnail, Container, FooterTab} from 'native-base';
import Navbar from '../navbar/navbar';
import ProfileItem from '../Content/ProfileItem';
import Footers from '../Footer/Footer';
import {getCart} from '../Publics/Redux/Actions/cart';
import {getWhislist} from '../Publics/Redux/Actions/whislist';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
class User extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        <ProfileItem />
        <Footers />
      </Fragment>
    );
  }
}

export default User;
