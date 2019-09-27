import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from '../navbar/navbar';
import Footers from '../Footer/Footer';
import Conten from '../Content/cardWhislist';
import {getWhislist} from '../Publics/Redux/Actions/whislist';
import {connect} from 'react-redux';

class Whislist extends Component {
  state = {
    data: [],
  };

  componentWillMount = async () => {
    this.setState({data: this.props.whislist.result});
  };
  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          {this.state.data ? (
            this.state.data.map(dat => {
              return (
                <Conten
                  id={dat.id_item}
                  name={dat.name}
                  price={dat.price}
                  img={dat.img}
                  idUser={dat.id_user}
                />
              );
            })
          ) : (
            <Text>Data Tidak Ada</Text>
          )}
        </ScrollView>
        <Footers />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    whislist: state.whislist.whislistList,
  };
};

export default connect(mapStateToProps)(Whislist);
