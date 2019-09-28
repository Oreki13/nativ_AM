import React, {Fragment, Component} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {Content, Button, Text, Thumbnail} from 'native-base';
import {withNavigation} from 'react-navigation';

class Auth extends Component {
  render() {
    return (
      <Content>
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
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text>Register</Text>
              </Button>
            </View>
          </View>
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
  Buton: {alignItems: 'center', marginTop: 10, padding: 10},
  img: {marginTop: 30, alignItems: 'center'},
  ButonIn: {marginBottom: 15, width: 80, justifyContent: 'center'},
  ButonIn3: {marginBottom: 15, width: 90, justifyContent: 'center'},
  ButonIn2: {
    marginBottom: 15,
    width: 110,
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default withNavigation(Auth);
