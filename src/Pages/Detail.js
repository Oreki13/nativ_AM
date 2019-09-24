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
import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';
import {ScrollView, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {getDetail} from '../Publics/Redux/Actions/Prodacts';

class Detail extends Component {
  state = {
    detail: [],
  };
  componentDidMount = async () => {
    let itemId = {
      params: {
        id: this.props.navigation.getParam('idItem'),
      },
    };

    await this.props.dispatch(getDetail(itemId));

    this.setState({
      detail: this.props.detail.result,
    });
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          {this.state.detail ? (
            <View style={styles.card}>
              {this.state.detail.map((item, index) => {
                return (
                  <Card key={index} style={{flex: 0}}>
                    <CardItem>
                      <Left>
                        <Body>
                          <Text>{item.name}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <View style={styles.item}>
                          <Image
                            source={{
                              uri: item.img,
                            }}
                            style={{
                              height: 200,
                              width: 200,
                            }}
                          />
                          <Text style={{textAlign: 'justify'}}>
                            {item.detail}
                          </Text>
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
                );
              })}
            </View>
          ) : (
            <Text>Data Not Found Atau Refresh</Text>
          )}
        </ScrollView>
        <Footers />
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
    detail: state.prodacts.detail,
  };
};

export default connect(mapStateToProps)(Detail);
