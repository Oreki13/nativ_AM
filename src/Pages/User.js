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
        <View style={styles.img}>
          <Thumbnail
            large
            source={{
              uri:
                'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png',
            }}
          />
        </View>

        <ProfileItem logOut={this.logout} />
        <Footers />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  img: {marginTop: 30, alignItems: 'center'},
});

export default User;
