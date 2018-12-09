import React, { Component } from 'reactn'
import { View, Text, TouchableOpacity, Picker, Image, StatusBar } from 'react-native'
import AllCrypto from './CryptoListView';
import _ from 'lodash'
import { allCryptoCurrencyList } from '../../Helper/ApiCalls'
import SearchInput, { createFilter } from 'react-native-search-filter';
import Icon from 'react-native-vector-icons/Ionicons'
import { sortCrypto } from '../../Helper/Sorter'

const KEYS_TO_FILTER = ['name']

class CryptoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoData: null,
            filteredData: null,
            searchTerm: "RA",
        }
    }

    static navigationOptions = () => {
        return (
            {
                title: 'Pocket Money',
                headerStyle: {
                    backgroundColor: '#1A5276',
                },
                headerTintColor: '#E8DAEF',
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: 'Dosis',
                    fontWeight: '200'
                }
            }
        )
    }

    callAPI() {
        this.setGlobal({
            loading: true
        })
        allCryptoCurrencyList(this.global.startIndex).then(data => {
            if (data === -1) {
                this.setGlobal({
                    loading: false
                })
            }
            else {
                this.setGlobal({
                    allCrypto: data,
                    loading: false
                })
                let searchAble = [];
                for (item in data) {
                    searchAble.push(data[item])
                }
                let sorted = _.orderBy(searchAble, ["rank"], ["asc"])
                this.setState({
                    cryptoData: sorted,
                    filteredData: sorted
                })
            }
        })
    }

    componentDidMount() {
        this.callAPI();
    }

    onRefreshPress() {
        this.callAPI();
    }

    searchUpdated(term) {
        this.setState({
            searchTerm: term
        })
    }

    onSearchPress() {
        let filteredCrypto = null;
        if (this.state.cryptoData !== null) {
            filteredCrypto = this.state.cryptoData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER))
        }
        console.log(filteredCrypto);
        if (filteredCrypto.length === 0) {
            filteredCrypto = null;
        }
        this.setState({ filteredData: filteredCrypto })
    }

    sortingCrypto(param) {
        if(this.state.filteredData!==null){
            let sorted = sortCrypto(param, this.state.filteredData);
            this.setState({
                filteredData: sorted,
                searchTerm: param
            })
        }        
    }

    paginationPress(param) {
        if(this.state.filteredData!==null){
            if (param === "Next") {
                startIndex = this.global.startIndex;
                startIndex += 100;
                this.setGlobal({
                    startIndex
                })
                this.callAPI();
            }
            else if (param === "Previous") {
                startIndex = this.global.startIndex;
                startIndex > 100 ? startIndex -= 100 : startIndex;
                this.setGlobal({
                    startIndex
                })
                this.callAPI();
            }
        }        
    }

    render() {
        return (
            this.global.loading ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D6EAF8' }}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#2E4053"
                    />
                    <Image source={require('../../assets/Spinner/Infinity.gif')} style={{ width: 100, height: 100 }}></Image>
                    <Text style={{ fontSize: 16, fontFamily: 'Dosis' }}>Loading Surprises...</Text>
                </View>
                :
                <View style={{ flex: 1, backgroundColor: '#D6EAF8' }}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#2E4053"
                    />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, marginTop: 5, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ flex: 9 }}>
                            <SearchInput placeholder="Type Cryptocurrency Name" style={{ fontSize: 15, fontFamily: 'Dosis' }} onChangeText={(term) => { this.searchUpdated(term) }} />
                        </View>
                        <View style={{ flex: 1, borderRadius: 10, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.onSearchPress()}>
                                <Icon name="ios-search" color="#424949" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 9 }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ flex: 1, fontSize: 16, fontFamily: 'Dosis', fontWeight: '400' }}>Sort:</Text>
                                <Picker selectedValue={this.state.searchTerm} onValueChange={(value) => this.sortingCrypto(value)} style={{ flex: 4 }} mode="dropdown">
                                    <Picker.Item key={0} label="Ranking - Asc." value="RA" />
                                    <Picker.Item key={1} label="Ranking - Desc." value="RD" />
                                    <Picker.Item key={4} label="Price - Asc." value="PA" />
                                    <Picker.Item key={5} label="Price - Desc." value="PD" />
                                    <Picker.Item key={6} label="Change - Asc." value="CA" />
                                    <Picker.Item key={7} label="Change - Desc." value="CD" />
                                    <Picker.Item key={8} label="Symbol - Asc." value="SA" />
                                    <Picker.Item key={9} label="Symbol - Desc." value="SD" />
                                    <Picker.Item key={2} label="Name - Asc." value="NA" />
                                    <Picker.Item key={3} label="Name - Desc." value="ND" />
                                </Picker>
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }} onPress={() => this.onRefreshPress()} >
                                    <Icon name="ios-refresh" color="#1B4F72" size={28} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.7 }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ flex: 1, margin: 10 }} onPress={() => this.paginationPress("Previous")}>
                                        <Icon name="ios-arrow-back" color="#1B4F72" size={25} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 1, margin: 10 }} onPress={() => this.paginationPress("Next")} >
                                        <Icon name="ios-arrow-forward" color="#1B4F72" size={25} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 10 }}>
                            <AllCrypto navigation={this.props.navigation} data={this.state.filteredData} />
                        </View>
                    </View>
                </View>
        )
    }
}

export default CryptoList;