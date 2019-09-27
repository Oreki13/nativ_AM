import React, {Fragment, Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import {getCategory} from '../Publics/Redux/Actions/categoryList';
import {getUser} from '../Publics/Redux/Actions/user';
import {getWhislist} from '../Publics/Redux/Actions/whislist';
import {getCart} from '../Publics/Redux/Actions/cart';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Navbar from '../navbar/navbar';
import Search from '../Search/index';
import Conten from '../Content/card';
import Footer from '../Footer/Footer';

class Category extends Component {
  state = {
    dataCategory: [],
    isLogin: false,
  };
  componentDidMount = async () => {
    const user_id = await AsyncStorage.getItem('user_id');

    await this.props.dispatch(getCategory());
    await this.props.dispatch(getUser(user_id));
    await this.props.dispatch(getWhislist(user_id));
    await this.props.dispatch(getCart(user_id));
    this.setState({
      dataCategory: this.props.category.result,
    });
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          <View style={styles.search}>
            <Search />
          </View>
          <View style={styles.card}>
            {this.state.dataCategory.map((category, index) => {
              return (
                <Conten
                  key={index}
                  name={category.name}
                  img={category.img}
                  id={category.id_kategori}
                  onPress={() =>
                    this.props.navigation.navigate('ItemList', {
                      nameKategori: category.name,
                    })
                  }
                />
              );
            })}
            {/* <Conten
              onPress={() => this.props.navigation.navigate('ItemList')}
            /> */}
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

const mapStateToProps = state => {
  return {
    category: state.dataList.kategoriList,
  };
};

export default connect(mapStateToProps)(Category);
