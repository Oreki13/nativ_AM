import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';
import Conten from '../Content/cardWhislist';

class Whislist extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          <Conten />
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}

export default Whislist;
