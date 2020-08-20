import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import TextWithBackgroundComponent from './TextWithBackgroundComponent';

const CoinsList = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <View>
          <Image
            source={{
              uri: 'https://static2.coinpaprika.com/coin/' + props.data.id + '/logo-thumb.png'
            }}
            style={styles.image}
          />
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
        <Text style={styles.priceUSD}>$ {Math.round(props.data.price_usd* 100) / 100}</Text>
        <TextWithBackgroundComponent 
        text={props.data.percent_change_24h + '%'}
        backgroundColor={'red'}
        />
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
  image: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    margin: 5 
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
});

export default CoinsList;
