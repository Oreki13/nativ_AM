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
import {connect} from 'react-redux';
import {deleteCart, getCart} from '../Publics/Redux/Actions/cart';
import {withNavigation} from 'react-navigation';
import {postTransaction} from '../Publics/Redux/Actions/transaction';

class cardCart extends Component {
  goRef = () => {
    this.props.navigation.navigate('Home');
  };
  handleDelete = async () => {
    const iduser = this.props.idUser;
    const idItem = this.props.id;

    await this.props
      .dispatch(deleteCart(iduser, idItem))
      .then(() => {
        ToastAndroid.show(
          'Data Dihapus',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.props.dispatch(getCart(iduser));
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
                <Right>
                  <Body>
                    <Text>Rp. {this.props.price}</Text>
                  </Body>
                </Right>
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
                <Right>
                  <Button transparent onPress={this.handleDelete}>
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

export default withNavigation(connect()(cardCart));
