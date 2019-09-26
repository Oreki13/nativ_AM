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
import {StyleSheet, Image} from 'react-native';

handleWhislist = () => {
  console.log('Awowkowkowk');
};

handleCart = () => {
  console.log('Binggooo');
};

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
            {props.dataUser.result.length > 0 ? (
              <Left>
                <Button
                  transparent
                  textStyle={{color: '#87838B'}}
                  onPress={handleWhislist}>
                  <Icon name="heart" />
                </Button>
                <Button
                  transparent
                  textStyle={{color: '#87838B'}}
                  onPress={handleCart}>
                  <Icon name="cart" />
                </Button>
              </Left>
            ) : null}
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

const mapStateToProps = state => {
  return {
    dataUser: state.user.dataUser,
  };
};

export default connect(mapStateToProps)(cardDetail);
