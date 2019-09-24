import React, {Fragment, Component} from 'react';
import {ScrollView, View, StyleSheet, Image} from 'react-native';
import {getCategory} from '../Publics/Redux/Actions/categoryList';
import {connect} from 'react-redux';

import Navbar from '../navbar/navbar';
import Search from '../Search/index';
import Conten from '../Content/card';
import Footer from '../Footer/Footer';

class Category extends Component {
  state = {
    dataCategory: [],
  };
  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
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
