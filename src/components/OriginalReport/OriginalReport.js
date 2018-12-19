import React, { Component } from 'reactn';
import { StyleSheet, View, WebView, Image } from 'react-native';
import {BannerView} from 'react-native-fbads'

class OriginalReport extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading: true
        }
    }

    static navigationOptions = () => {
        return (
            {
                title: 'Original Report',
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

    stopLoading(){
        this.setState({
            loading:false
        })
    }

    render() {
        let url = this.props.navigation.getParam('url');
        return (
                 <View style={styles.container}>                
                    <WebView source={{uri:url}} style={{backgroundColor:'#A9CCE3'}} onLoad={()=>this.stopLoading()}/> 
                    {
                        this.state.loading &&
                        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9CCE3' }}>                    
                            <Image source={require('../../assets/Spinner/Infinity.gif')} style={{ width: 80, height: 80 }}></Image>
                        </View>
                    }                                     
                    <View style={{ alignItems:'flex-start', justifyContent:'flex-end' }}>
                        <BannerView
                            placementId='345487866030573_349789775600382'
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
        backgroundColor: '#A9CCE3',
    }
});

export default OriginalReport;