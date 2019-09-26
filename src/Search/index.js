import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Item, Icon, Input} from 'native-base';
import {withNavigation} from 'react-navigation';

class Search extends Component {
  state = {
    tmp: '',
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
  // searchGo = event => {
  //   if (event.nativeEvent.key == 'Enter') {
  //     console.log('asowoekwoekok');
  //     this.props.navigation.navigate('Search', {
  //       tmpSearch: this.state.tmp,
  //     });
  //   }
  // };
  render() {
    console.log({...this.state.tmp});

    return (
      <Item rounded style={styles.searchBar}>
        <Icon active name="search" />
        <Input
          placeholder="Search"
          onChangeText={text => this.handleForm('tmp', text)}
          // onKeyPress={event => this.searchGo(event)}
          onSubmitEditing={this.searchGo}
        />
      </Item>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {height: 40},
});

export default withNavigation(Search);
