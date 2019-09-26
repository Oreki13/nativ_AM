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
import {ScrollView, StyleSheet, Image} from 'react-native';

class CardWhislist extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <View>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Nama Barang Anda</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{uri: 'Image URL'}}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="cart" />
                    <Text>Add To Cart</Text>
                  </Button>
                </Left>
                <Right>
                  <Button transparent>
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

export default CardWhislist;
