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
  //auto sort - sort always from the lowest to the highest price in USD
  res.sort((a, b) => a.price_usd < b.price_usd ? -1 : a.price_usd > b.price_usd ? 1 : 0)
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
