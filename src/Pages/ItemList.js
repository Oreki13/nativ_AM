import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';

class ItemList extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          <View style={{flex: 1}}>
            <Text>Hello Worlld</Text>
          </View>
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}

export default ItemList;
