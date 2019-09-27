import React, {Component, Fragment} from 'react';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
} from 'native-base';
import {ScrollView, StyleSheet, Image, ToastAndroid} from 'react-native';
import {postCart} from '../Publics/Redux/Actions/cart';
import {deleteWhislist} from '../Publics/Redux/Actions/whislist';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

class CardWhislist extends Component {
  goCart = () => {
    this.props.navigation.navigate('User');
  };
  handleCart = () => {
    const curentItem = this.props.id;
    const item = this.props.cart.result;
    const iduser = this.props.idUser;
    console.log(item);

    if (item !== undefined) {
      {
        item.find(target => target.id_item === curentItem)
          ? alert('Data Sudah Ada')
          : this.props
              .dispatch(postCart(iduser, curentItem))
              .then(() => {
                ToastAndroid.show(
                  'Ditambahkan ke Cart',
                  ToastAndroid.LONG,
                  ToastAndroid.CENTER,
                );
                this.props.dispatch(deleteWhislist(iduser, curentItem));
                this.goCart();
              })
              .catch(err => console.log(err));
      }
    } else {
      this.props
        .dispatch(postCart(iduser, curentItem))
        .then(() => {
          ToastAndroid.show(
            'Ditambahkan ke Cart',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
          this.props.dispatch(deleteWhislist(iduser, curentItem));
          this.goCart();
        })
        .catch(err => console.log(err));
    }
  };

  goRef = () => {
    this.props.navigation.navigate('Home');
  };
  handleRemove = () => {
    const curentItem = this.props.id;
    const iduser = this.props.idUser;
    this.props
      .dispatch(deleteWhislist(iduser, curentItem))
      .then(() => {
        ToastAndroid.show(
          'Data Dihapus',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.goRef();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Fragment>
        <ScrollView>
          <View>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{this.props.name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{uri: this.props.img}}
                  style={{
                    height: 200,
                    width: null,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={this.handleCart}>
                    <Icon active name="cart" />
                    <Text>Add To Cart</Text>
                  </Button>
                </Left>
                <Right>
                  <Button transparent onPress={this.handleRemove}>
                    <Icon active name="trash" />
                    <Text>Delete</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartList,
  };
};

export default withNavigation(connect(mapStateToProps)(CardWhislist));
