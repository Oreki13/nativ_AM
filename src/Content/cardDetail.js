import React, {Component, Fragment} from 'react';
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
} from 'native-base';
import {connect} from 'react-redux';
import {
  postWhislist,
  deleteWhislist,
  getWhislist,
} from '../Publics/Redux/Actions/whislist';
import {postCart, getCart} from '../Publics/Redux/Actions/cart';
import {StyleSheet, Image, ToastAndroid} from 'react-native';

class cardDetail extends Component {
  handleWhislist = () => {
    const curentItem = this.props.idItem;
    const item = this.props.whislist.result;
    const dataId = this.props.dataUser.result;
    const iduser = dataId[0].userId;

    if (item !== undefined) {
      {
        item.find(target => target.id_item === curentItem)
          ? this.props
              .dispatch(deleteWhislist(iduser, curentItem))
              .then(() => {
                ToastAndroid.show(
                  'Data Dihapus',
                  ToastAndroid.LONG,
                  ToastAndroid.CENTER,
                );
                this.props.dispatch(getWhislist(iduser));
              })
              .catch(err => console.log(err))
          : this.props
              .dispatch(postWhislist(iduser, curentItem))
              .then(() => {
                ToastAndroid.show(
                  'Ditambahkan ke Whislist',
                  ToastAndroid.LONG,
                  ToastAndroid.CENTER,
                );
                this.props.dispatch(getWhislist(iduser));
              })
              .catch(err => console.log(err));
        console.log('Tidakk');
      }
    } else {
      this.props
        .dispatch(postWhislist(iduser, curentItem))
        .then(() => {
          ToastAndroid.show(
            'Ditambahkan ke Whislist',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
          this.props.dispatch(getWhislist(iduser));
        })
        .catch(err => console.log(err));
      console.log('asdasd');
    }
  };

  handleCart = () => {
    const curentItem = this.props.idItem;
    const item = this.props.cart.result;
    const dataId = this.props.dataUser.result;
    const iduser = dataId[0].userId;
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
                this.props.dispatch(getCart(iduser));
              })
              .catch(err => console.log(err));
        console.log('Tidakk');
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
          this.props.dispatch(getCart(iduser));
        })
        .catch(err => console.log(err));
      console.log('asdasd');
    }
  };

  render() {
    const curentItem = this.props.idItem;
    const item = this.props.whislist;
    console.log(curentItem, item);
    return (
      <Fragment>
        <View>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.names}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <View style={styles.item}>
                  <Image
                    source={{
                      uri: this.props.img,
                    }}
                    style={{
                      height: 200,
                      width: 200,
                    }}
                  />
                  <Text style={{textAlign: 'justify'}}>
                    {this.props.detail}
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem>
              {this.props.dataUser.result.length > 0 ? (
                <Left>
                  <Button
                    transparent
                    textStyle={{color: '#87838B'}}
                    onPress={this.handleWhislist}>
                    <Icon name="heart" />
                  </Button>
                  <Button
                    transparent
                    textStyle={{color: '#87838B'}}
                    onPress={this.handleCart}>
                    <Icon name="cart" />
                  </Button>
                </Left>
              ) : null}
            </CardItem>
          </Card>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    dataUser: state.user.dataUser,
    whislist: state.whislist.whislistList,
    cart: state.cart.cartList,
  };
};

export default connect(mapStateToProps)(cardDetail);
