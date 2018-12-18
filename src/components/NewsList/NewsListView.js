import React, { Component } from 'reactn'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

class NewsListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                {
                    this.props.data.map((item, key) => {
                        return (
                            <TouchableOpacity style={styles.card} key={key} onPress={() => this.props.navigation.navigate("SingleNews", { newsData: item })}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                        <Image style={{ width: 70, height: 70, marginHorizontal: 10, borderRadius:10 }} source={{ uri: item.imageurl }} />
                                    </View>
                                    <View style={{flex:4 , alignItems: 'flex-start', justifyContent: 'space-evenly', marginLeft:10 }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'Dosis', borderBottomWidth: 1, borderBottomColor: '#1A5276' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 15, fontFamily: 'Dosis' }}>{item.body.substr(0,80)}...</Text>                                        
                                        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                            <Text style={{ fontSize: 15, fontFamily: 'Dosis', color: '#0E6655', marginRight:5 }}>Upvote: {item.upvotes}</Text>
                                            <Text style={{ fontSize: 15, fontFamily: 'Dosis', color: '#7B241C', marginRight:5 }}>Downvote: {item.downvotes}</Text>                                            
                                        </View>                                    
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = {
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom:5,
        backgroundColor: '#A9CCE3',
        borderRadius: 10,
        padding: 10
    }
}

export default NewsListView;