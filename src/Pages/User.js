import React, {Fragment, Component} from 'react';
import {ScrollView, ToastAndroid} from 'react-native';
import {getUser} from '../Publics/Redux/Actions/user';

import Navbar from '../navbar/navbar';
import ProfileItem from '../Content/ProfileItem';
import Footers from '../Footer/Footer';
import {logout} from '../Publics/Redux/Actions/user';
import Auth from '../Content/Auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
class User extends Component {
  state = {
    user: [],
    userId: '',
  };
  componentDidMount = async () => {
    await AsyncStorage.getItem('user_id')
      .then(value => {
        if (value !== null) {
          value = parseInt(value);
          this.setState({userId: value});
        }
      })
      .catch(err => console.log(err));
    await this.props.dispatch(getUser(this.state.userId));
    this.setState({user: this.props.dataUser.result});
  };

  logout = () => {
    AsyncStorage.clear();
    this.props.dispatch(logout());
    this.props.navigation.navigate('Home');
    ToastAndroid.show(`Logout`, ToastAndroid.LONG, ToastAndroid.CENTER);
  };

  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          {this.state.userId ? (
            this.state.user.map((dat, index) => {
              return (
                <ProfileItem
                  name={dat.name}
                  email={dat.email}
                  logouts={this.logout}
                />
              );
            })
          ) : (
            <Auth />
          )}
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    dataUser: state.user.dataUser,
  };
};

export default connect(mapStateToProps)(User);
