import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const TextWithBackgroundComponent = ({additionalStyles, additionatLabelStyles, text, backgroundColor}) => {
  
  return (
    <View style={[styles.labelContainer, {backgroundColor: backgroundColor}, additionalStyles]}>
      <Text style={[styles.labelText, additionatLabelStyles]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  labelContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: "right"
  },
});
export default TextWithBackgroundComponent;