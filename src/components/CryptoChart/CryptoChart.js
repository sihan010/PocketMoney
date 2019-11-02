import { Image, Text, View } from 'react-native'
import React, { Component } from 'reactn'
import { cryptoChartData } from '../../Helper/ApiCalls'
import CryptoChartView from './CryptoChartView'

class CryptoChart extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:true,
            apiData:null
        }
    }

    static navigationOptions = ({ navigation }) => {
        let crypto= navigation.getParam('crypto','BTC');
        let fiat= navigation.getParam('fiat','USD');
        let title= crypto+"-"+fiat+" Chart";
        return (
            {
                title: title,
                headerStyle: {
                    backgroundColor: '#1A5276',
                },
                headerTintColor: '#fff',
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

    apiCall(){
        let crypto= this.props.navigation.getParam('crypto','BTC');
        let fiat= this.props.navigation.getParam('fiat','USD');
        cryptoChartData(crypto,fiat).then(res=>{
            if(res===-1){
                this.setState({
                    loading:false
                })
            }
            else{
                let chartData=[];
                for(let i=0;i<res.length;i++){
                    let timeStamp = res[i].time *1000;
                    let open = res[i].open;
                    let high = res[i].high;
                    let low = res[i].low;
                    let close = res[i].close;
                    let row=[timeStamp,open,high,low,close];
                    chartData.push(row);
                }
                this.setState({
                    loading:false,
                    apiData:chartData
                })
            }
        })
    }

    componentDidMount(){
        this.apiCall();
    }

    render() {
        let crypto= this.props.navigation.getParam('crypto','BTC');
        let fiat= this.props.navigation.getParam('fiat','USD');
        let title= crypto+" VS "+fiat;
        return (
            this.state.loading ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D6EAF8' }}>
                    <Image source={require('../../assets/Spinner/Infinity.gif')} style={{ width: 100, height: 100 }}></Image>
                    <Text style={{ fontSize: 16, fontFamily: 'Dosis' }}>Chart Loading...</Text>
                </View>
            :
                <View style={{ flex: 1, backgroundColor: '#D6EAF8' }}>
                    <CryptoChartView data={this.state.apiData} title={title} />
                </View>                
        );
    }
}

export default CryptoChart;