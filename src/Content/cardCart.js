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

class cardCart extends Component {
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
                  <Button transparent onPress={this.props.delete}>
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

export default withNavigation(cardCart);
