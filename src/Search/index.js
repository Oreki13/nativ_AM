import React from 'react';
import {StyleSheet} from 'react-native';
import {Item, Icon, Input} from 'native-base';

const Search = () => {
  return (
    <Item rounded style={styles.searchBar}>
      <Icon active name="search" />
      <Input placeholder="Search" />
    </Item>
  );
};

const styles = StyleSheet.create({
  searchBar: {height: 40},
});

export default Search;
