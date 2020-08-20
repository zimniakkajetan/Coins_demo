import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

const CoinsList = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <View>
          <Text>{props.number + 1}</Text>
        </View>
        <View>
          <Text style={styles.title}>{props.data.symbol}</Text>
          <Text style={styles.subTitle}>{props.data.name}</Text>
        </View>
        <View>
        </View>
      </View>
      <View style={styles.chart}></View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceUSD}>$ {props.data.price_usd}</Text>
        <Text style={styles.percentageChange}>{props.data.percent_change_24h}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    margin: 10
  },
  nameContainer: {
    width: '25%',
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  subTitle: {
    fontSize: 16
  },
  chart: {
    width: '50%'
  },
  priceContainer: {
    width: '25%',
  },
  priceUSD: {
    fontSize: 12,
    width: '100%',
  },
  percentageChange: {
    width: '100%',
    textAlign: "right"
  }
});

export default CoinsList;
