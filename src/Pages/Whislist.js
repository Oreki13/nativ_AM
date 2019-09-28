import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';
import Conten from '../Content/cardWhislist';
import {getWhislist, deleteWhislist} from '../Publics/Redux/Actions/whislist';
import {postCart} from '../Publics/Redux/Actions/cart';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
class Whislist extends Component {
  state = {
    datas: [],
    dataId: '',
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('user_id')
      .then(value => {
        if (value !== null) {
          value = parseInt(value);
          this.setState({dataId: value});
        }
      })
      .catch(err => console.log(err));
    await this.props.dispatch(getWhislist(this.state.dataId));
    this.setState({datas: this.props.whislist});
  };

  handleCart = () => {
    const tmpItem = this.state.data[0];
    const idItem = tmpItem.id_item;
    const tmpiduser = this.state.data[0];
    const idUser = tmpiduser.id_user;
    const item = this.props.cart.result;

    console.log(item);

    if (item !== undefined) {
      {
        item.find(target => target.id_item === idItem)
          ? alert('Data Sudah Ada')
          : this.props
              .dispatch(postCart(idUser, idItem))
              .then(() => {
                ToastAndroid.show(
                  'Ditambahkan ke Cart',
                  ToastAndroid.LONG,
                  ToastAndroid.CENTER,
                );
                this.props.dispatch(deleteWhislist(idUser, idItem)).then(() => {
                  this.props.dispatch(getWhislist(idUser));
                  this.setState({data: this.props.whislist});
                });
              })
              .catch(err => console.log(err));
      }
    } else {
      this.props
        .dispatch(postCart(idUser, idItem))
        .then(() => {
          ToastAndroid.show(
            'Ditambahkan ke Cart',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
          this.props.dispatch(deleteWhislist(idUser, idItem)).then(() => {
            this.props.dispatch(getWhislist(idUser));
            this.setState({data: this.props.whislist});
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleRemove = () => {
    const tmpItem = this.state.data[0];
    const idItem = tmpItem.id_item;
    const tmpiduser = this.state.data[0];
    const idUser = tmpiduser.id_user;
    this.props
      .dispatch(deleteWhislist(idUser, idItem))
      .then(() => {
        ToastAndroid.show(
          'Data Dihapus',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.props.dispatch(getWhislist(idUser));
        this.setState({data: this.props.whislist});
      })
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          {this.state.datas ? (
            this.state.datas.map((dat, index) => {
              return (
                <Conten
                  key={index}
                  id={dat.id_item}
                  name={dat.name}
                  price={dat.price}
                  img={dat.img}
                  idUser={dat.id_user}
                  remove={this.handleRemove}
                  add={this.handleCart}
                />
              );
            })
          ) : (
            <Text>Data Tidak Ada</Text>
          )}
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    whislist: state.whislist.whislistList,
    cart: state.cart.cartList,
  };
};

export default connect(mapStateToProps)(Whislist);
