import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import {Container, Content, Form, Item, Input, Button} from 'native-base';
import {connect} from 'react-redux';
import {register} from '../../Publics/Redux/Actions/user';
import Header from '../../navbar/navbar';
import Footers from '../../Footer/Footer';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
  state = {
    user: {
      fullname: '',
      email: '',
      password: '',
      image: 'default',
      role_id: 2,
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
    this.props.navigation.navigate('Login');
  };

  submit = async () => {
    await this.props.dispatch(register(this.state.user));
    if (this.props.dataUser.error !== null) {
      this.setState({error: true});
    } else {
      this.goo();
    }
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <View style={styles.logins}>
            <Text style={styles.logtex}>Create Account</Text>
            {this.state.error ? (
              <Text style={{color: 'red'}}>Email Atau Password salah</Text>
            ) : null}
          </View>
          <Form>
            <Item>
              <Input
                type="text"
                id="fullname"
                placeholder="fullname"
                name="email"
                onChangeText={text => this.handleForm('fullname', text)}
              />
            </Item>
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
              <Text> Register</Text>
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
