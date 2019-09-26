import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import {Container, Content, Form, Item, Input, Button} from 'native-base';
import {connect} from 'react-redux';
import {login} from '../../Publics/Redux/Actions/user';
import Header from '../../navbar/navbar';
import Footers from '../../Footer/Footer';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    error: false,
    usersId: 0,
  };

  handleForm = (key, value) => {
    let user = {...this.state.user};
    user[key] = value;
    this.setState({user});
  };

  goo = () => {
    this.props.navigation.navigate('Home');
  };

  // submit = () => {
  //   this.props
  //     .dispatch(login(this.state.user))
  //     .then(async res => {
  //       console.log('DISINII', res);

  //       const userid = ['userId', res.value.data.result.userId];
  //       const roleId = ['role_id', res.value.data.result.role_id];
  //       const isLogin = ['isLogin', true];
  //       console.log(userid, roleId, isLogin);

  //       if (res.value.data.error == null) {
  //         try {
  //           await AsyncStorage.multiSet([userid, roleId, isLogin]);
  //           this.goo();
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       } else if (res.value.data.error !== null) {
  //         this.setState({error: true});
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };

  // submit = async () => {
  //   await this.props.dispatch(login(this.state.user));
  //   if (this.props.dataUser.error == null) {
  //     console.log(this.props.dataUser.result.userId);

  //     AsyncStorage.setItem('token', this.props.dataUser.result.token);
  //     AsyncStorage.setItem('role_id', this.props.dataUser.result.role_id);
  //     AsyncStorage.setItem('userId', this.props.dataUser.result.userId);
  //     this.goo();
  //   } else {
  //     this.setState({error: true});
  //   }
  // };

  submit = async () => {
    await this.props
      .dispatch(login(this.state.user))
      .then(async res => {
        if (res.value.data.error !== null) {
          ToastAndroid.show(
            'Email atau password salah',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        } else {
          const user_id = this.props.dataUser.result.userId.toString();
          const role_id = this.props.dataUser.result.role_id.toString();

          await AsyncStorage.setItem('user_id', user_id);

          await AsyncStorage.setItem('role_id', role_id);

          ToastAndroid.show('Sukses', ToastAndroid.LONG, ToastAndroid.CENTER);
          this.props.navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  // submit = () => {
  //   this.props
  //     .dispatch(login(this.state.user))
  //     .then(async res => {
  //       if (res.action.payload.data.result.token !== undefined) {
  //         await AsyncStorage.setItem(
  //           'userId',
  //           res.action.payload.data.result.userId,
  //           err => console.log(err),
  //         );
  //         this.props.navigation.navigate('Home');
  //       }
  //     })
  //     .catch(() => {
  //       console.log(this.props.dataUser.error);
  //       Toast.show({
  //         text: this.props.dataUser.error,
  //         buttonText: 'Okay',
  //         type: 'danger',
  //         position: 'top',
  //         duration: 4000,
  //       });
  //     });
  // };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <View style={styles.logins}>
            <Text style={styles.logtex}>Login</Text>
            {this.state.error ? (
              <Text style={{color: 'red'}}>Email Atau Password salah</Text>
            ) : null}
          </View>
          <Form>
            <Item>
              <Input
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                onChangeText={text => this.handleForm('email', text)}
              />
            </Item>
            <Item last>
              <Input
                secureTextEntry={true}
                id="password"
                placeholder="Password"
                name="password"
                onChangeText={text => this.handleForm('password', text)}
              />
            </Item>
          </Form>
          <View style={styles.buton}>
            <Button warning style={styles.butlog} onPress={() => this.submit()}>
              <Text> Login </Text>
            </Button>
          </View>
        </Content>
        <Footers />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logins: {alignItems: 'center', marginVertical: 15},
  logtex: {fontSize: 25},
  buton: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 15,
  },
  butlog: {width: 100, alignItems: 'center', justifyContent: 'center'},
});

const mapStateToProps = state => {
  return {
    dataUser: state.user.dataUser,
  };
};
export default connect(mapStateToProps)(Login);
