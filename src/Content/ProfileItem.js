import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Content, Button, Text, Thumbnail} from 'native-base';
import {withNavigation} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faShoppingCart,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';

class ProfileItem extends Component {
  render() {
    return (
      <Content>
        <View style={styles.content}>
          <View style={styles.img}>
            <Thumbnail
              large
              source={{
                uri:
                  'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png',
              }}
            />
          </View>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>My Profile</Text>
          </View>
          <View style={styles.In}>
            <Text style={styles.TitleTextIn}>Name: {this.props.name}</Text>
            <Text style={styles.TitleTextIn}>Email: {this.props.email}</Text>
          </View>
        </View>
        <View style={styles.Buton}>
          <Button bordered style={styles.ButonIn3} onPress={this.props.logouts}>
            <Text>Logout</Text>
          </Button>
          <Button
            bordered
            style={styles.Buton}
            onPress={() => this.props.navigation.navigate('Cart')}>
            <FontAwesomeIcon icon={faShoppingCart} color="#7D5B23" />
            <Text>Cart</Text>
          </Button>
          <Button
            bordered
            style={styles.Buton}
            onPress={() => this.props.navigation.navigate('Whislist')}>
            <FontAwesomeIcon icon={faHeart} color="#7D5B23" />
            <Text>Whislist</Text>
          </Button>
          <Button
            bordered
            style={styles.Buton}
            onPress={() => this.props.navigation.navigate('History')}>
            <FontAwesomeIcon icon={faHistory} color="#7D5B23" />
            <Text>History</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {marginTop: 10},
  Title: {alignItems: 'center'},
  In: {alignItems: 'center', marginTop: 5, padding: 10},
  TitleText: {fontSize: 20},
  TitleTextIn: {fontSize: 15, textAlign: 'left', marginTop: 5},
  Buton: {alignItems: 'center', marginTop: 10, padding: 10},
  img: {marginTop: 30, alignItems: 'center'},
  ButonIn: {marginBottom: 15, width: 80, justifyContent: 'center'},
  ButonIn3: {marginBottom: 15, width: 90, justifyContent: 'center'},
  ButonIn2: {
    marginBottom: 15,
    width: 110,
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default withNavigation(ProfileItem);
