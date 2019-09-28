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

import {withNavigation} from 'react-navigation';

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
                  <Button transparent onPress={this.props.add}>
                    <Icon active name="cart" />
                    <Text>Add To Cart</Text>
                  </Button>
                </Left>
                <Right>
                  <Button transparent onPress={this.props.remove}>
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

export default withNavigation(CardWhislist);
