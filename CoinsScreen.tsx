import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CoinsList from './CoinsList';

const CoinpaprikaAPI = require('@coinpaprika/api-nodejs-client');

const client = new CoinpaprikaAPI();

let coins: Array<JSON> = [];
client.getTicker().then(res => {
  console.log(res[0]);
  coins = res;
}).catch(console.error);
// client.getGlobal().then(console.log).catch(console.error);

const CoinsScreen = () => {
  return (
    <View>
      <Text>Coins</Text>
      <CoinsList
        data={coins}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default CoinsScreen;
