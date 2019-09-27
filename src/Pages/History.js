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
import {connect} from 'react-redux';

class History extends Component {
  state = {
    data: [],
  };
  componentDidMount = async () => {
    // await this.props.dispatch(getTransactionId(id));
    this.setState({data: this.props.transactions.response});
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
            {this.state.data !== undefined ? (
              this.state.data.map((dat, index) => {
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
                          {this.state.data[index].enrollment.map(
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
    dataUser: state.user.dataUser,
    transactions: state.transaction.transactionList,
  };
};

export default connect(mapStateToProps)(History);
