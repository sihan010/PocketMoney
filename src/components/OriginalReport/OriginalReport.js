import React, { Component } from 'reactn';
import { StyleSheet, Text, View, WebView, Image } from 'react-native';

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
        console.log("View Loaded");
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
                    <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Dosis' }}>{url}</Text>
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