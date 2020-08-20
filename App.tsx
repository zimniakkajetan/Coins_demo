import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinsScreen from './CoinsScreen';
import TodayScreen from './TodayScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TodayScreen" component={TodayScreen} />
      <Tab.Screen name="CoinsScreen" component={CoinsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
