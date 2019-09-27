import React, {Fragment, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Thumbnail, Container, FooterTab} from 'native-base';
import Navbar from '../navbar/navbar';
import ProfileItem from '../Content/ProfileItem';
import Footers from '../Footer/Footer';
import {getCart} from '../Publics/Redux/Actions/cart';
import {getWhislist} from '../Publics/Redux/Actions/whislist';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
class User extends Component {
  // state = {
  //   id: '',
  //   data: [],
  // };
  // componentDidMount = async () => {
  //   await AsyncStorage.getItem('user_id').then(value => {
  //     // console.log(value);
  //     if (value !== null) {
  //       value = parseInt(value);
  //       this.setState({id: value});
  //     }
  //   });
  //   this.props.dispatch(getWhislist(user_id));
  //   this.props.dispatch(getCart(user_id));
  //   this.setState({data: this.props.whislist.result});
  //   console.log('asdasdad');
  // };
  render() {
    return (
      <Fragment>
        <Navbar />

        <ProfileItem />
        <Footers />
      </Fragment>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     whislist: state.whislist.whislistList,
//   };
// };

// export default connect(mapStateToProps)(User);
export default User;
