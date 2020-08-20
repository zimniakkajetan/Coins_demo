import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinsScreen from './CoinsScreen';
import TodayScreen from './TodayScreen';
import SettingsScreen from './SettingsScreen';
import SearchScreen from './SearchScreen';
import MyCoinsScreen from './MyCoinsScreen';

import TodayIcon from 'react-native-vector-icons/MaterialIcons';
import CoinsIcon from 'react-native-vector-icons/FontAwesome5';
import CogIcon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/Octicons';
import WalletIcon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TodayScreen"
        component={TodayScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <TodayIcon name='today' color={'#58AEE0'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="CoinsScreen"
        component={CoinsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CoinsIcon name='coins' color={'#58AEE0'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SearchIcon name='search' color={'#58AEE0'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCoinsScreen"
        component={MyCoinsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <WalletIcon name='wallet' color={'#58AEE0'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CogIcon name='md-cog' color={'#58AEE0'} size={30} />
          ),
        }}
      />
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
