import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import CoinsListItem from './CoinsListItem';

const CoinsList = (props) => {
  return (
    <FlatList
        data={props.data}
        renderItem={({ item, index }) => (
          <CoinsListItem
            data={item}
            number={index}
          />
        )}
    />
  );
};

const styles = StyleSheet.create({

});

export default CoinsList;
