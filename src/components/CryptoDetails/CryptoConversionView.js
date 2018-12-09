import React, {Component} from 'reactn'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import Flag from 'react-native-round-flags';
import {CountryCodeMapper} from '../../Helper/CountryMapper'
import Icon from 'react-native-vector-icons/AntDesign'

class CryptoConversionView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.data !== null ?
                <ScrollView>
                    {
                        Object.keys(this.props.data).map((item,key)=>{
                            return(
                                <View key={key} >
                                    <View style={styles.card} >
                                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                            <Flag code={CountryCodeMapper(item)} style={{height:50, width: 50}} />
                                            <Text style={styles.textStyle}>1 {this.props.fromCurrency} = {this.props.raw[item].PRICE.toFixed(3)} {item}</Text>
                                            <Text style={styles.textStyle}>Updated: {this.props.data[item].LASTUPDATE}</Text>
                                            <Text style={styles.textStyle}>Last Market: {this.props.data[item].LASTMARKET}</Text>
                                        </View>
                                        <View style={{flex:1.5, alignItems:'flex-start', justifyContent:'center'}}>
                                            {/* <Text style={styles.textStyle}>Open: {this.props.data[item].OPENDAY}</Text>
                                            <Text style={styles.textStyle}>High: {this.props.data[item].HIGHDAY}</Text>
                                            <Text style={styles.textStyle}>Low: {this.props.data[item].LOWDAY}</Text> */}
                                            <View style={{flexDirection:'row'}}>
                                                <View style={{flex:2}}>
                                                    {
                                                        this.props.raw[item].CHANGEDAY<0 ?
                                                        <Text style={styles.textStyleRed}>Change: {this.props.data[item].CHANGEDAY} %</Text>
                                                        :
                                                        <Text style={styles.textStyleGreen}>Change: {this.props.data[item].CHANGEDAY} %</Text>  
                                                    } 
                                                </View>
                                                <View style={{flex:1, alignItems:'flex-end', marginRight:5}}>
                                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chart',{crypto:this.props.fromCurrency,fiat:item})}>
                                                        <Icon name="areachart" size={20} color='#1A5276'/>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            {
                                                this.props.raw[item].CHANGEPCT24HOUR<0 ?
                                                <Text style={styles.textStyleRed}>Change PCT: {this.props.data[item].CHANGEPCTDAY}</Text>
                                                :
                                                <Text style={styles.textStyleGreen}>Change PCT: {this.props.data[item].CHANGEPCTDAY}</Text>  
                                            }                                                                                 
                                            <Text style={styles.textStyle}>Capitalization: {this.props.data[item].MKTCAP}</Text> 
                                            <Text style={styles.textStyle}>Supply: {this.props.data[item].SUPPLY}</Text>
                                            <Text style={styles.textStyle}>Volume(24 Hour): {this.props.data[item].VOLUME24HOUR}</Text> 
                                            <Text style={styles.textStyle}>Total Volume(24 Hour): {this.props.data[item].TOTALVOLUME24H}</Text>                                                              
                                        </View>
                                    </View>
                                </View>                                
                            )
                        })
                    }
                </ScrollView>
            :
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Dosis', marginTop: 20 }}>No Currency Found!</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Dosis', marginTop: 10}}>
                    Currently Following Fiat Currencies are Supported.
                </Text>
                <Text style={{ fontSize: 16, fontFamily: 'Dosis', marginTop: 10}}>
                    USD, EUR, GBP, AUD, CAD, DKK, HKD, NZD, NOK, PLN, SGD, ZAR, SEK, CHF, RUB, INR, BDT, MXN, CZK, JPY, CNY
                </Text>
                <Text style={{ fontSize: 16, fontFamily: 'Dosis', marginTop: 50}}>
                    Comment on Google Play to Request your Currency
                </Text>
            </View>
        )
    }
}

const styles={
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center', 
        marginHorizontal:10,
        marginBottom:10,
        backgroundColor:'#A9CCE3', 
        //backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10
    },
    textStyle:{
        fontSize:14,
        fontFamily:"Dosis"
    },
    textStyleRed:{
        fontSize:15,
        fontFamily:"Dosis",
        color:'#7B241C'
    },
    textStyleGreen:{
        fontSize:15,
        fontFamily:"Dosis",
        color:'#0E6655'
    }
}

export default CryptoConversionView;