import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
const CoinpaprikaAPI = require('@coinpaprika/api-nodejs-client');

const client = new CoinpaprikaAPI();

let coins: JSON = {};
client.getTicker().then(res => {
  console.log(res.length);
  coins = res;
}).catch(console.error);
// client.getGlobal().then(console.log).catch(console.error);

console.log('aaa')
const CoinsScreen = () => {
  return (
    <View>
      <Text>Coins</Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default CoinsScreen;
