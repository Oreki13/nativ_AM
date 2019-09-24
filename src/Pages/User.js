import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Thumbnail, Container, FooterTab} from 'native-base';
import Navbar from '../navbar/navbar';
import ProfileItem from '../Content/ProfileItem';
import Footers from '../Footer/Footer';

const User = () => {
  return (
    <Fragment>
      <Navbar />
      <View style={styles.img}>
        <Thumbnail
          large
          source={{
            uri:
              'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png',
          }}
        />
      </View>

      <ProfileItem />
      <Footers />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  img: {marginTop: 30, alignItems: 'center'},
});

export default User;
