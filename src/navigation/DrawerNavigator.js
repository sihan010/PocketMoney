import React from 'react'
import {View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import News from '../Screens/News'
import CryptoCurrencies from '../Screens/CryptoCurrencies'
import Icon from 'react-native-vector-icons/Ionicons'
import {BannerView} from 'react-native-fbads'

//const width = Dimensions.get("screen").width;

const CustomDrawer = (props) =>(
    <SafeAreaView style={{flex:1, backgroundColor:'#D6EAF8'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../assets/logo/logo.png')} style={{height:120, width:120}} />
        </View>
        <ScrollView style={{flex:5}}>
            <DrawerItems {...props} />
        </ScrollView>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            {/* <Image source={require('../assets/logo/logo.png')} style={{height:120, width:120}} /> */}
            {/* <BannerView
                placementId='345487866030573_349780602267966'
                type="standard"
                onPress={(didClick) => console.log('Drawer Ad Clicked',didClick)}
                onError={err => console.log('Drawer Ad Error', err)}
            /> */}
        </View>
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
        //drawerWidth:width,
        contentOptions:{
            activeTintColor:'#1A5276',
            inactiveTintColor:'#283747'
        }
    }      
);

export default createAppContainer(RootNavigator);