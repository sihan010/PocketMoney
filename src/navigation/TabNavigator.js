import React from 'reactn'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import News from '../Screens/News'
import CryptoCurrencies from '../Screens/CryptoCurrencies'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator(
    {
        CryptoCurrencies: CryptoCurrencies,
        //News: News,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'CryptoCurrencies') {
              iconName = `logo-bitcoin`;
            } 
            else if (routeName === 'News') {
              iconName = `ios-calculator`;
            }
            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: '#A2D9CE',
          inactiveTintColor: '#E8DAEF',
          activeBackgroundColor:'#1A5276',
          inactiveBackgroundColor:'#1A5276',
          labelStyle:{
              fontFamily:"Dosis",
              fontSize:16
          }
        },
    }
);

export default createAppContainer(TabNavigator);