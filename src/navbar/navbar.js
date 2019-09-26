import React, {Fragment} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faHeart,
  faShoppingCart,
  faUser,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import {Header, Button, Left, Right} from 'native-base';
import {withNavigation} from 'react-navigation';

const Navbar = props => {
  return (
    <Fragment>
      <Header androidStatusBarColor="#A87526" style={styles.header1}>
        <Image source={require('../img/img.png')} style={styles.img} />
      </Header>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  header1: {backgroundColor: '#F5A623'},
  img: {width: 105, height: 40, marginTop: 8},
  btn: {backgroundColor: '#F5A623'},
});

export default withNavigation(Navbar);
