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

import {StyleSheet, Image} from 'react-native';

const cardDetail = props => {
  return (
    <Fragment>
      <View>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Body>
                <Text>{props.names}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <View style={styles.item}>
                <Image
                  source={{
                    uri: props.img,
                  }}
                  style={{
                    height: 200,
                    width: 200,
                  }}
                />
                <Text style={{textAlign: 'justify'}}>{props.detail}</Text>
              </View>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="heart" />
              </Button>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="cart" />
              </Button>
            </Left>
          </CardItem>
        </Card>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default cardDetail;
