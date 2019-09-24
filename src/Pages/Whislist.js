import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';

class Whislist extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          <View>
            <Text>Hello World</Text>
          </View>
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}

export default Whislist;
