import React, {Fragment, Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import Navbar from '../navbar/navbar';
import Search from '../Search/index';
import Footers from '../Footer/Footer';
import Conten from '../Content/card';
import {connect} from 'react-redux';
import {getName} from '../Publics/Redux/Actions/Prodacts';
class SearchTab extends Component {
  state = {
    param: {
      params: {
        name: this.props.navigation.getParam('tmpSearch'),
      },
    },
    tmp: '',
    itemList: [],
  };

  componentDidMount = async () => {
    const data = this.props.navigation.getParam('tmpSearch');
    const param = {
      params: {
        name: data.tmp,
      },
    };
    // console.log(data.tmp);

    await this.props.dispatch(getName(param));
    this.setState({
      itemList: this.props.data.result,
    });
  };

  handleForm = (key, value) => {
    let tmp = this.state;
    tmp[key] = value;
    this.setState({tmp});
  };

  searchGo = () => {
    this.props.navigation.navigate('SearchTab', {
      tmpSearch: this.state.tmp,
    });
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
    data: state.prodacts.itemList,
  };
};

export default withNavigation(connect(mapStateToProps)(SearchTab));
