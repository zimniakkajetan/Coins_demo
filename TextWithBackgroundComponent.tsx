import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const TextWithBackgroundComponent = ({text, backgroundColor}) => {
  
  return (
    <View style={[styles.labelContainer, {backgroundColor: backgroundColor}]}>
      <Text style={styles.labelText}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  labelContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: "right"
  },
});
export default TextWithBackgroundComponent;