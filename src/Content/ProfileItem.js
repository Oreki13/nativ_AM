import React, {Fragment, Component} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {Content, Button, Text, Thumbnail} from 'native-base';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';
import {logout} from '../Publics/Redux/Actions/user';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faHeart,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
// const buton = () => {
//   AsyncStorage.setItem('tes', 'Awokwokwo');
//   const tess = AsyncStorage.getItem('tes');
//   console.log(tess);
// };
class ProfileItem extends Component {
  state = {
    data: this.props.dataUser.result,
  };

  logout = () => {
    AsyncStorage.clear();
    this.props.dispatch(logout());
    this.props.navigation.navigate('Home');
    ToastAndroid.show(`Logout`, ToastAndroid.LONG, ToastAndroid.CENTER);
  };
  // componentDidMount = async () => {
  //   const userId = await AsyncStorage.getItem('user_id')

  // };

  // logout = async () => {
  //   await AsyncStorage.clear();
  //   this.props.navigation.navigate('Home');
  //   console.log('asdasdads');
  // };
  render() {
    const data = {...this.state.data};

    return (
      <Content>
        {this.state.data.length > 0 ? (
          <>
            <View style={styles.content}>
              <View style={styles.img}>
                <Thumbnail
                  large
                  source={{
                    uri:
                      'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png',
                  }}
                />
              </View>
              <View style={styles.Title}>
                <Text style={styles.TitleText}>My Profile</Text>
              </View>
              <View style={styles.In}>
                <Text style={styles.TitleTextIn}>Name: {data[0].name}</Text>
                <Text style={styles.TitleTextIn}>Email: {data[0].email}</Text>
              </View>
            </View>
            <View style={styles.Buton}>
              <Button bordered style={styles.ButonIn} onPress={this.logout}>
                <Text>Logout</Text>
              </Button>
              <Button
                vertical
                onPress={() => this.props.navigation.navigate('Cart')}>
                <FontAwesomeIcon icon={faShoppingCart} color="#7D5B23" />
                <Text style={styles.fontFoot}>Cart</Text>
              </Button>
              <Button
                vertical
                onPress={() => this.props.navigation.navigate('Whislist')}>
                <FontAwesomeIcon icon={faHeart} color="#7D5B23" />
                <Text style={styles.fontFoot}>Whislist</Text>
              </Button>
            </View>
          </>
        ) : (
          <>
            <View style={styles.content}>
              <View style={styles.Title}>
                <Text style={styles.TitleText}>Welcome to Aneka Musik APP</Text>
              </View>
              <View style={styles.In}>
                <Text style={styles.TitleTextIn}>Have a Account ?</Text>
                <View style={styles.Buton}>
                  <Button
                    bordered
                    style={styles.ButonIn}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Login</Text>
                  </Button>
                </View>
                <Text style={styles.TitleTextIn}>Or</Text>
                <View style={styles.Buton2}>
                  <Button
                    bordered
                    style={styles.ButonIn2}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Register</Text>
                  </Button>
                </View>
              </View>
            </View>
          </>
        )}
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {marginTop: 10},
  Title: {alignItems: 'center'},
  In: {alignItems: 'center', marginTop: 5, padding: 10},
  TitleText: {fontSize: 20},
  TitleTextIn: {fontSize: 15, textAlign: 'left', marginTop: 5},
  Buton: {alignItems: 'center', marginTop: 10},
  img: {marginTop: 30, alignItems: 'center'},
  ButonIn: {marginBottom: 15, width: 90, justifyContent: 'center'},
  ButonIn2: {
    marginBottom: 15,
    width: 100,
    justifyContent: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = state => {
  return {
    dataUser: state.user.dataUser,
  };
};

export default withNavigation(connect(mapStateToProps)(ProfileItem));
