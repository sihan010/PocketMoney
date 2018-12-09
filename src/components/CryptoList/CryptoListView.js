import React, { Component } from 'reactn'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

class AllCrypto extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.data !== null ?
                <ScrollView>
                    {
                        this.props.data.map((item, key) => {
                            return (
                                <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate("Details", { initialData: item})}>
                                    <View style={styles.card}>
                                        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image style={{ width: 100, height: 100, marginHorizontal: 10 }} source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/128x128/${item.id}.png` }} />
                                        </View>
                                        <View style={{ flex: 2.5, alignItems: 'flex-start', justifyContent: 'space-evenly', marginLeft: 2 }}>
                                            <Text style={{ color: 'black', fontFamily: 'Dosis', fontSize: 18 }}>Symbol: {item.symbol}</Text>
                                            <Text style={{ color: 'black', fontFamily: 'Dosis', fontSize: 16 }}>Name: {item.name}</Text>
                                            <Text style={{ color: 'black', fontFamily: 'Dosis', fontSize: 16 }}>Price: {item.quotes.USD.price} USD</Text>
                                            <Text style={{ color: 'black', fontFamily: 'Dosis', fontSize: 16 }}>Total Supply: {item.total_supply}</Text>
                                            {
                                                item.quotes.USD.percent_change_24h < 0 ?
                                                    <Text style={{ color: '#7B241C', fontFamily: 'Dosis', fontSize: 16 }}>Change(1 Day): {item.quotes.USD.percent_change_24h}%</Text>
                                                    :
                                                    <Text style={{ color: '#0E6655', fontFamily: 'Dosis', fontSize: 16 }}>Change(1 Day): {item.quotes.USD.percent_change_24h}%</Text>
                                            }

                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', paddingRight: 5 }}>
                                            <Text style={{ color: '#196F3D', fontSize: 22, fontFamily: 'Monoton' }}>{item.rank}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Dosis', marginTop: 20 }}>No Currency Found!</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Dosis', marginTop: 10 }}>Please Refresh or Check Internet Connection!</Text>
                </View>
        )
    }
}

const styles = {
    flexAlignJustify: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center', justifyContent: 'center', 
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor:'#A9CCE3', 
        //backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10
    }
}

export default AllCrypto;