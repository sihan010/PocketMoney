import React, {Component} from 'reactn';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {BannerView, InterstitialAdManager} from 'react-native-fbads'

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

    componentWillUnmount(){
        InterstitialAdManager.showAd('345487866030573_345494499363243')
        .then(didClick => {
            console.log("Ad Clicked !", didClick)
        })
        .catch(error => {
            console.log("Ad error !", error)
        });
    }

    render() {
        let data=this.props.navigation.getParam('newsData');
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let time = new Date(data.published_on *1000);
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
                 <View style={{alignItems:'flex-start', justifyContent:'flex-end'}}>
                    <BannerView
                        placementId='345487866030573_349789482267078'
                        type="standard"
                        onPress={(didClick) => console.log('Drawer Ad Clicked',didClick)}
                        onError={err => console.log('Drawer Ad Error', err)}
                    />                  
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