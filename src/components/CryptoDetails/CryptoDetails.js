import React, { Component } from 'reactn'
import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import {singleCryptoCurrencyDetails} from '../../Helper/ApiCalls'
import SearchInput, { createFilter } from 'react-native-search-filter';
import Icon from 'react-native-vector-icons/Ionicons'
import CryptoConversionView from './CryptoConversionView'
import {InterstitialAdManager, BannerView} from 'react-native-fbads'

const KEYS_TO_FILTER = ['name']

class CryptoDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:true,
            apiData: null,
            searchDisplay:null,
            searchRaw:null,
            searchTerm:""
        }
    }

    static navigationOptions = ({ navigation }) => {
        let initialData= navigation.getParam('initialData','{name:"Bitcoin"}');
        let title= initialData.name;
        return (
            {
                title: title,
                headerStyle: {
                    backgroundColor: '#1A5276',
                },                
                headerTintColor: '#E8DAEF',
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: 'Dosis',
                    fontWeight: '200',
                    marginLeft: -40
                }
            }
        )
    }

    componentDidMount(){
        let initialData= this.props.navigation.getParam('initialData','{symbol:"BTC"}');
        let symbol= initialData.symbol;
        this.apiCall(symbol);
    }

    componentWillUnmount(){
        InterstitialAdManager.showAd('345487866030573_345535846025775')
        .then(didClick => {
            console.log("Ad Clicked !", didClick)
        })
        .catch(error => {
            console.log("Ad error !", error)
        });
    }

    apiCall(symbol){        
        singleCryptoCurrencyDetails(symbol).then(data=>{
            if(data===-1){
                this.setState({
                    loading:false
                })
            }
            else{               
                this.setState({
                    loading:false,
                    apiData:data,
                    searchRaw:data.RAW[symbol],
                    searchDisplay:data.DISPLAY[symbol]
                })
            }
        })
    }

    searchUpdated(term){
        this.setState({
            searchTerm: term
        })
    }

    onSearchPress(){
        let insideLoop=false;
        let initialData= this.props.navigation.getParam('initialData','{symbol:"BTC"}');
        let symbol= initialData.symbol;
        let allCurrencies=[];
        if(this.state.apiData1!==null){
            for(item in this.state.apiData.RAW[symbol]){
                allCurrencies.push({
                    'name':item
                })
            }                
            let filtered = allCurrencies.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER));
            let searchDisplay= {}
            let searchRaw= {}
            for(let i=0;i<filtered.length;i++){
                insideLoop=true;
                let key = filtered[i].name;
                searchDisplay[key] = this.state.apiData.DISPLAY[symbol][key]; 
                searchRaw[key] = this.state.apiData.RAW[symbol][key];                
            }
            if(insideLoop){           
                this.setState({
                    searchDisplay,
                    searchRaw
                })
            }
            else{
                searchDisplay = null;
                searchRaw = null;
                this.setState({
                    searchDisplay,
                    searchRaw
                })
            }  
        }      
    }

    render() {
        let item = this.props.navigation.getParam('initialData');
        return (
            <View style={{flex:1, backgroundColor:'#D6EAF8'}}>
                <View style={{ flex: 1,flexDirection:'row', alignItems: 'center', justifyContent: 'center', backgroundColor:'#D5F5E3', borderRadius:10, margin:10, padding:10 }}>                    
                    <View style={{flex:0.50, alignItems:'center',justifyContent:'center'}}>
                        <Image style={{ width: 50, height: 50, marginRight: 20 }} source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/128x128/${item.id}.png` }} />                            
                    </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{ color: 'black', fontFamily: 'Dosis', fontSize: 18 }}>Symbol: {item.symbol}</Text>
                        <Text style={{ color: 'black', fontFamily: 'Dosis', fontSize: 16 }}>Name: {item.name}</Text>
                    </View>
                    <View style={{flex:1, alignItems:'flex-start',justifyContent:'center',margin:5}}>
                        <Text style={{ color: '#196F3D', fontSize: 22, fontFamily: 'Monoton' }}>Rank: {item.rank}</Text>                        
                    </View>                                                     
                </View>

                {/* ScrollView */}
                <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, marginTop: 5, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ flex: 9 }}>
                            <SearchInput placeholder="Your Desired Fiat Currency" style={{ fontSize: 15, fontFamily: 'Dosis' }} onChangeText={(term) => { this.searchUpdated(term) }} />
                        </View>
                        <View style={{ flex: 1, borderRadius: 10, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.onSearchPress()}>
                                <Icon name="ios-search" color="#424949" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
                        {
                            this.state.loading ?
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../assets/Spinner/Heart.gif')} style={{ width: 100, height: 100 }}></Image>
                                    <Text style={{ fontSize: 16, fontFamily: 'Dosis' }}>Conversion Loading...</Text>
                                </View> 
                            :
                                <View style={{ flex: 1}}>
                                    <CryptoConversionView data={this.state.searchDisplay} fromCurrency={item.symbol} raw={this.state.searchRaw} navigation={this.props.navigation}/>
                                </View>
                        }
                        
                    </View>
                </View>

                <View style={{alignItems:'flex-start', justifyContent:'flex-end'}}>
                    <BannerView
                        placementId='345487866030573_349780602267966'
                        type="standard"
                        onPress={(didClick) => console.log('Drawer Ad Clicked',didClick)}
                        onError={err => console.log('Drawer Ad Error', err)}
                    />                  
                 </View>
            </View>
        )
    }
}

export default CryptoDetails;