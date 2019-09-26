import React, {Fragment, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Thumbnail, Container, FooterTab} from 'native-base';
import Navbar from '../navbar/navbar';
import ProfileItem from '../Content/ProfileItem';
import Footers from '../Footer/Footer';

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
