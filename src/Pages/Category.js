import React, {Fragment, Component} from 'react';
import {ScrollView, View, StyleSheet, Image} from 'react-native';

import Navbar from '../navbar/navbar';
import Search from '../Search/index';
import Conten from '../Content/card';
import Footer from '../Footer/Footer';

class Category extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          <View style={styles.search}>
            <Search />
          </View>
          <View style={styles.card}>
            <Conten />
            <Conten />
            <Conten />
            <Conten />
          </View>
          <View>
            <Image source={require('../img/gitar2.png')} />
          </View>
        </ScrollView>
        <Footer />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  search: {marginTop: 8, paddingHorizontal: 10},
});

export default Category;
