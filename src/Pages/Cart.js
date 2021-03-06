import React, {Component, Fragment} from 'react';

import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';
import Conten from '../Content/cardCart';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView, Text, View, ToastAndroid} from 'react-native';
import {Button, Icon, Left} from 'native-base';
import {connect} from 'react-redux';
import {postTransaction} from '../Publics/Redux/Actions/transaction';
import {deleteCart, getCart} from '../Publics/Redux/Actions/cart';

class Cart extends Component {
  state = {
    cart: [],
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
    console.log('Awdfs');

    await this.props.dispatch(getCart(this.state.dataId));
    this.setState({cart: this.props.cart.result});
  };

  handleDelete = () => {
    const createIdItem = this.state.cart;
    const idItem = createIdItem[0].id_item;
    const iduser = this.state.dataId;

    this.props
      .dispatch(deleteCart(iduser, idItem))
      .then(() => {
        ToastAndroid.show(
          'Data Dihapus',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.props.dispatch(getCart(iduser));
        this.setState({cart: this.props.cart.result});
      })
      .catch(err => console.log(err));
  };

  handleCheckout = () => {
    const createIdItem = this.state.cart;
    const idItem = createIdItem[0].id_item;
    const id = this.state.dataId;

    let tmp = [];
    this.state.cart.map(car => {
      tmp.push(car.id_item);
      return null;
    });
    // this.setState({ tmps: tmp });
    const data = {
      id_items: [...tmp],
    };

    console.log(data);
    this.props
      .dispatch(postTransaction(id, data))
      .then(() => {
        ToastAndroid.show('Checkout', ToastAndroid.LONG, ToastAndroid.CENTER);

        this.props.dispatch(deleteCart(id, idItem)).then(() => {
          this.props.dispatch(getCart(id));
          this.setState({cart: this.props.cart.result});
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          {this.state.cart ? (
            <View>
              {this.state.cart.map((dat, index) => {
                return (
                  <Conten
                    key={index}
                    id={dat.id_item}
                    name={dat.name}
                    price={dat.price}
                    img={dat.img}
                    idUser={dat.id_user}
                    delete={this.handleDelete}
                  />
                );
              })}
              <Left>
                <Button
                  onPress={this.handleCheckout}
                  style={{
                    width: 140,
                    backgroundColor: '#d9b234',
                    padding: 10,
                    borderRadius: 15,
                    margin: 10,
                  }}>
                  <Icon style={{color: 'black'}} name="cart" />
                  <Text>Checkout</Text>
                </Button>
              </Left>
            </View>
          ) : (
            <Text>Data Not Found </Text>
          )}
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.prodacts.detail,
    cart: state.cart.cartList,
  };
};

export default connect(mapStateToProps)(Cart);
// export default Cart;
