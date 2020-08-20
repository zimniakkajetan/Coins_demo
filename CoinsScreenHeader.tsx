import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CoinsScreenHeader = ({
  currency,
  leftTabAction,
  rightTabAction,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={styles.currency}>
        {currency}
      </Text>
      <Text style={styles.title}>Coins</Text>
      <View
        style={styles.buttons}>
        <TouchableOpacity
          onPress={leftTabAction}
          style={styles.button}>
          {/* <FeatherIcon color="#58AEE0" name={'bar-chart'} size={20} /> */}
          <Text
            style={styles.buttonTitle}>
            TOP 100
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={rightTabAction}
          style={styles.button}>
          <Text
            style={styles.buttonTitle}>
            MARKET CAP
          </Text>
          {/* <FeatherIcon color="#58AEE0" name={'sliders'} size={20} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    margin: 10
  },
  currency: {
    alignSelf: 'flex-end',
    fontSize: 18,
    color: '#58aee0',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#e4e6ea',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 15,
    flexDirection: 'row',
  },
  buttonTitle: {
    color: '#58aee0',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  }
})
export default CoinsScreenHeader;