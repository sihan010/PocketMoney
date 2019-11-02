import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import CryptoCurrencies from '../Screens/CryptoCurrencies';
import News from '../Screens/News';

const CustomDrawer = (props) =>(
    <SafeAreaView style={{flex:1}}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../assets/logo/logo.png')} style={{height:120, width:120, marginVertical:50}} />
        </View>
        <ScrollView style={{flex:5}}>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const RootNavigator = createDrawerNavigator(
    {
        "Crypto Currencies": {
            screen: CryptoCurrencies,
            navigationOptions:{
                drawerIcon:({tintColor})=>(
                    <Icon name="logo-bitcoin" color={tintColor} size={26} />
                ),
            }
        },        
        "Crypto News": {
            screen: News,
            navigationOptions:{
                drawerIcon:({tintColor})=>(
                    <Icon name="ios-paper" color={tintColor} size={26} />
                ),
            }
        },
    } , 
    {
        contentComponent: CustomDrawer,
        drawerBackgroundColor:'rgba(19, 141, 117,0.9)',
        //drawerWidth:width,
        contentOptions:{
            activeTintColor:'#2E4053',
            inactiveTintColor:'#212F3C',
            labelStyle:{
                fontWeight: 'normal',
                fontFamily:'Dosis',
                fontSize:20
            }
        }
    }      
);

export default createAppContainer(RootNavigator);