import React, {Fragment, Component} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {Content, Button, Text} from 'native-base';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';
import {logout} from '../Publics/Redux/Actions/user';
// const buton = () => {
//   AsyncStorage.setItem('tes', 'Awokwokwo');
//   const tess = AsyncStorage.getItem('tes');
//   console.log(tess);
// };
class ProfileItem extends Component {
  state = {
    userId: '',
  };
  componentDidMount = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    this.setState({userId: user_id});
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
    return (
      <Content>
        <View style={styles.content}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>My Profile</Text>
          </View>
          <View style={styles.In}>
            <Text style={styles.TitleTextIn}>
              Name: Muhammad Arfandy Surya Nugraha
            </Text>
            <Text style={styles.TitleTextIn}>
              Email: arfandynugraha21@gmail.com
            </Text>
            <Text style={styles.TitleTextIn}>Role: Admin</Text>
          </View>
        </View>
        <View style={styles.Buton}>
          {this.state.userId ? (
            <Button bordered style={styles.ButonIn} onPress={this.logout}>
              <Text>Logout</Text>
            </Button>
          ) : (
            <Button
              bordered
              style={styles.ButonIn}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>Login</Text>
            </Button>
          )}
        </View>
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
  Buton: {alignItems: 'center'},
  ButonIn: {marginBottom: 15, width: 90},
});

export default withNavigation(connect()(ProfileItem));
