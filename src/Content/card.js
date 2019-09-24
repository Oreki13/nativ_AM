import React, {Fragment, Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {Card} from 'native-base';

class Conten extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment
        style={{
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 5,
        }}>
        <TouchableOpacity style={styles.Cards}>
          <View style={styles.in}>
            <Text style={styles.texts}>Helloasdaasd</Text>

            <Image style={styles.img} source={require('../img/gitar2.png')} />
          </View>
        </TouchableOpacity>
        {/* <View style={styles.img}>
          <Image source={require('../img/gitar2.png')} />
        </View> */}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header1: {backgroundColor: '#F5A623'},
  Cards: {
    maxWidth: 150,
    minWidth: 150,
    height: 100,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#F5A623',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  img: {
    height: 100,
    width: 100,
  },
  in: {flexDirection: 'row', padding: 5},
  texts: {fontSize: 12, flex: 1, flexWrap: 'wrap', marginTop: 30},
});

export default Conten;
