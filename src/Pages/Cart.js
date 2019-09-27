import React, {Component, Fragment} from 'react';

import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';
import Conten from '../Content/cardCart';
import {ScrollView, Text, View, ToastAndroid} from 'react-native';
import {Button, Icon, Left} from 'native-base';
import {connect} from 'react-redux';
import {postTransaction} from '../Publics/Redux/Actions/transaction';
import {deleteCart} from '../Publics/Redux/Actions/cart';

class Cart extends Component {
  state = {
    cart: [],
  };
  componentDidMount = async () => {
    this.setState({cart: this.props.cart.result});
  };

  handleCheckout = () => {
    const createId = this.state.cart;
    const createIdItem = this.state.cart;
    const idItem = createIdItem[0].id_item;
    const id = createId[0].id_user;

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

        this.props.dispatch(deleteCart(id, idItem));
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);

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
                  />
                );
              })}
              <Left>
                <Button
                  onPress={this.handleCheckout}
                  style={{width: 140, backgroundColor: 'white', padding: 10}}>
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
