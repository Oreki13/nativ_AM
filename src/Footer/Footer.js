import React, {Fragment, Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import {Button, Footer, FooterTab} from 'native-base';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faHeart,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {withNavigation} from 'react-navigation';

class Footers extends Component {
  render() {
    return (
      <Fragment>
        <Footer>
          <FooterTab style={styles.footer1}>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Home')}>
              <FontAwesomeIcon icon={faHome} color="#7D5B23" />
              <Text style={styles.fontFoot}>Home</Text>
            </Button>
            <Button vertical>
              <FontAwesomeIcon icon={faShoppingCart} color="#7D5B23" />
              <Text style={styles.fontFoot}>Cart</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Whislist')}>
              <FontAwesomeIcon icon={faHeart} color="#7D5B23" />
              <Text style={styles.fontFoot}>Whislist</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('User')}>
              <FontAwesomeIcon icon={faUser} color="#7D5B23" />
              <Text style={styles.fontFoot}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  footer1: {backgroundColor: '#E6E6E6'},
  fontFoot: {fontSize: 10},
});

export default withNavigation(Footers);
