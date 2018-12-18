import React, {Component} from 'reactn';
import {StyleSheet, Text, View, WebView, TouchableOpacity, ScrollView, Image} from 'react-native';

class SingleNews extends Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = () => {
        return (
            {
                title: 'Detailed News',
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

    render() {
        let data=this.props.navigation.getParam('newsData');
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let time = new Date(data.published_on *1000);
        let html = `<p>${data.body}</p>`;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Image style={{ width: 150, height: 150, margin: 15, borderRadius:10, alignSelf:'center' }} source={{ uri: data.imageurl }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Dosis', margin: 15}}>{data.title}</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Dosis', marginLeft: 15, marginBottom:15}}>Published On: {days[time.getDay()]+", "+(time.getMonth()+1)+"-"+time.getDate()+"-"+time.getFullYear()}</Text>
                        
                        <Text style={{ fontSize: 15, fontFamily: 'Dosis', margin: 15 }}>{data.body}</Text>
                        
                        
                        <Text style={{ fontSize: 15, fontFamily: 'Dosis', color: '#0E6655', marginLeft:15 }}>Upvote: {data.upvotes}</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Dosis', color: '#7B241C', marginLeft:15 }}>Downvote: {data.downvotes}</Text>                                            
                        <TouchableOpacity 
                            style={{alignSelf:'center', margin:25,padding:10, borderRadius:10, backgroundColor:'#1A5276'}}
                            onPress={()=>this.props.navigation.navigate('OriginalReport',{url: data.guid})}>
                            <Text style={{fontSize: 15, fontFamily: 'Dosis', color:'#E8DAEF'}}>View Original Report</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                 <View style={{alignItems:'center', justifyContent:'flex-end'}}>
                    <Text style={{fontSize: 15, fontFamily: 'Dosis'}}>Advertisement</Text>                    
                 </View>
            </View>
        );
      }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#A9CCE3',
    }
});

export default SingleNews;