import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getItem} from '../Publics/Redux/Actions/Prodacts';
import Navbar from '../navbar/navbar';
import Search from '../Search/index';
import Footers from '../Footer/Footer';
import Conten from '../Content/card';

class ItemList extends Component {
  state = {
    itemList: [],
  };
  componentDidMount = async () => {
    let itemName = {
      params: {
        type: this.props.navigation.getParam('nameKategori'),
      },
    };

    await this.props.dispatch(getItem(itemName));
    this.setState({itemList: this.props.item.result});
  };
  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          <View style={styles.search}>
            <Search />
          </View>

          {this.state.itemList ? (
            <View style={styles.card}>
              {this.state.itemList.map((item, index) => {
                return (
                  <Conten
                    key={index}
                    name={item.name}
                    img={item.img}
                    id={item.id}
                    onPress={() =>
                      this.props.navigation.navigate('Detail', {
                        idItem: item.id,
                      })
                    }
                  />
                );
              })}
            </View>
          ) : (
            <Text>Data Not Found</Text>
          )}

          {/* <Conten
              onPress={() => this.props.navigation.navigate('ItemList')}
            /> */}
        </ScrollView>
        <Footers />
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
    item: state.prodacts.itemList,
  };
};

export default connect(mapStateToProps)(ItemList);
