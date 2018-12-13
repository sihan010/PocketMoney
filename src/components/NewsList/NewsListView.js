import React, { Component } from 'reactn'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

class NewsListView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const viewAble= this.props.data.map((item,key)=>{
            return(
                <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate("SingleNews", { newsData: item})}>
                    <View style={styles.card}>
                        <View style={{ flex: 0.5}}>
                            <Image style={{ width: 50, height: 50, marginHorizontal: 10 }} source={{ uri: item.imageurl }} />
                        </View>                        
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15 , fontFamily: 'Dosis' }}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return(
            <View style={{flex:1}}>
                {viewAble}
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

export default NewsListView;