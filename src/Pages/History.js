import React, {Fragment, Component} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
} from 'native-base';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/Footer';
import {getTransactionId} from '../Publics/Redux/Actions/transaction';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class History extends Component {
  state = {
    dataTransaction: [],
    userId: '',
  };
  componentDidMount = async () => {
    await AsyncStorage.getItem('user_id')
      .then(value => {
        if (value !== null) {
          value = parseInt(value);
          this.setState({userId: value});
        }
      })
      .catch(err => console.log(err));
    console.log('asdasdad');

    await this.props.dispatch(getTransactionId(this.state.userId));
    this.setState({dataTransaction: this.props.transactions});
  };

  convertTimeStamp = timeStamp => {
    timeStamp.toString();
    return timeStamp.slice(0, 10);
  };
  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Navbar />
        <ScrollView>
          <Content padder>
            {this.state.dataTransaction ? (
              this.state.dataTransaction.map((dat, index) => {
                return (
                  <>
                    <Card>
                      <CardItem header bordered>
                        <Text>{dat.name}</Text>
                        <Right>
                          <Text>{this.convertTimeStamp(dat.date)}</Text>
                        </Right>
                      </CardItem>
                      <CardItem bordered>
                        <Body>
                          {this.state.dataTransaction[index].enrollment.map(
                            (lec, index) => (
                              <>
                                <Text>{lec.name}</Text>
                                <Text>Rp.{lec.price}</Text>
                                <Text></Text>
                              </>
                            ),
                          )}
                        </Body>
                      </CardItem>
                    </Card>
                  </>
                );
              })
            ) : (
              <Text>Data Tidak Ada</Text>
            )}
          </Content>
        </ScrollView>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transaction.transactionList.response,
  };
};

export default connect(mapStateToProps)(History);
