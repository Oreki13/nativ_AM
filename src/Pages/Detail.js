import React, {Component, Fragment} from 'react';

import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';
import Conten from '../Content/cardDetail';
import {ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getDetail} from '../Publics/Redux/Actions/Prodacts';

class Detail extends Component {
  state = {
    detail: [],
  };
  componentDidMount = async () => {
    let itemId = {
      params: {
        id: this.props.navigation.getParam('idItem'),
      },
    };

    await this.props.dispatch(getDetail(itemId));

    this.setState({
      detail: this.props.detail.result,
    });
  };
  render() {
    console.log(this.state.detail);

    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          {this.state.detail ? (
            <View>
              {this.state.detail.map((item, index) => {
                return (
                  <Conten
                    key={index}
                    names={item.name}
                    img={item.img}
                    detail={item.detail}
                    idItem={item.id}
                  />
                );
              })}
            </View>
          ) : (
            <Text>Data Not Found Atau Refresh</Text>
          )}
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.prodacts.detail,
  };
};

export default connect(mapStateToProps)(Detail);
