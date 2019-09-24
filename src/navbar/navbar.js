import React, {Fragment} from 'react';
import {StyleSheet, Image} from 'react-native';

import {Header} from 'native-base';

const Navbar = () => {
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
});

export default Navbar;
