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
          <TextWithBackgroundComponent 
            text={props.number + 1}
            backgroundColor={'#D3D3D3'}
            additionalStyles={{width: 25, height: 25}}
            additionatLabelStyles={{textAlign: 'center', fontSize: 11}}
          />
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
          text={props.data.percent_change_24h ? props.data.percent_change_24h + '%': '0.0%'}
          backgroundColor={props.data.percent_change_24h[0] === '-' ? 'red' : (
            props.data.percent_change_24h? 'green' : '#D3D3D3')}
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
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    marginRight: 5 
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
    fontSize: 14,
    width: '100%',
  },
});

export default CoinsList;
