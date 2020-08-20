import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CoinsList from './CoinsList';
import CoinsScreenHeader from './CoinsScreenHeader';

const CoinpaprikaAPI = require('@coinpaprika/api-nodejs-client');
const client = new CoinpaprikaAPI();

let coins: Array<JSON> = [];
client.getTicker().then(res => {
  console.log(res[0]);
  coins = res;
}).catch(console.error);

const CoinsScreen = () => {
  return (
    <View>
      <CoinsScreenHeader
        currency={'USD'}
        leftTabAction={() => {}}
        rightTabAction={() => {}}
      />
      <CoinsList
        data={coins}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default CoinsScreen;
