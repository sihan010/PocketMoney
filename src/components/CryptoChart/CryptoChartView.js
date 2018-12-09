import React, {Component} from 'reactn'
import {View, Text, ScrollView} from 'react-native'
import ChartView from 'react-native-highcharts';

class CryptoChartView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.title);
        var Highcharts='Highcharts';

        var blakie={
            colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#2a2a2b'],
                        [1, '#3e3e40']
                    ]
                },
                style: {
                    fontFamily: '\'Unica One\', sans-serif'
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'

                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },

            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },

            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },

            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },

            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },

            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        }

        var confCandle={
            rangeSelector: {
                selected: 1
            },    
            title: {
                text: ''
            },
            exporting:{
                enabled:false
            },
            credits:{
                enabled:false
            },
            rangeSelector:{
                enabled:false
            },
            navigator: {
                enabled: false
            },
            scrollbar:{
                enabled: false
            },
            series: [{
                name: this.props.title,      
                type: 'candlestick',
                name: this.props.title,
                data: this.props.data,
                dataGrouping: {
                    units: [
                        [
                            'week',
                            [1]
                        ], 
                        [
                            'month',
                            [1, 2, 3]
                        ]
                    ]
                }
            }]             
        };

        var confArea={
            rangeSelector: {
                selected: 1
            },    
            title: {
                text: ''
            },
            exporting:{
                enabled:false
            },
            credits:{
                enabled:false
            },
            rangeSelector:{
                enabled:false
            },
            navigator: {
                enabled: false
            },
            scrollbar:{
                enabled: false
            },
            series: [{
                name: this.props.title,      
                type: 'area',
                name: this.props.title,
                data: this.props.data,
                dataGrouping: {
                    units: [
                        [
                            'week',
                            [1]
                        ], 
                        [
                            'month',
                            [1, 2, 3]
                        ]
                    ]
                }
            }]             
        };

        var confLine={
            rangeSelector: {
                selected: 1
            },    
            title: {
                text: ''
            },
            exporting:{
                enabled:false
            },
            credits:{
                enabled:false
            },
            rangeSelector:{
                enabled:false
            },
            navigator: {
                enabled: false
            },
            scrollbar:{
                enabled: false
            },
            series: [{
                name: this.props.title,      
                type: 'line',
                name: this.props.title,
                data: this.props.data,
                dataGrouping: {
                    units: [
                        [
                            'week',
                            [1]
                        ], 
                        [
                            'month',
                            [1, 2, 3]
                        ]
                    ]
                }
            }]             
        };

        var confStock={
            rangeSelector: {
                selected: 1
            },    
            title: {
                text: ''
            },
            exporting:{
                enabled:false
            },
            credits:{
                enabled:false
            },
            rangeSelector:{
                enabled:false
            },
            navigator: {
                enabled: false
            },
            scrollbar:{
                enabled: false
            },
            series: [{                
                name: this.props.title,               
                type: 'ohlc',
                name: this.props.title,
                data: this.props.data,
                dataGrouping: {
                    units: [
                        [
                            'week',
                            [1]
                        ], 
                        [
                            'month',
                            [1, 2, 3]
                        ]
                    ]
                }
            }]             
        };
    
        const options = {
            global: {
                useUTC: true
            },
            lang: {
                decimalPoint: '.',
                thousandsSep: ','
            }
        };
        return(
            this.props.data!==null ?
                <ScrollView style={{backgroundColor:'#2a2a2b'}}>    
                    <Text style={styles.chartTitle}>CandleStick Chart</Text>                  
                    <ChartView 
                        style={{height:300, marginHorizontal:5, backgroundColor:'#2a2a2b'}} 
                        config={confCandle} 
                        options={options}
                        stock={true}
                        theme={blakie}>                    
                    </ChartView>
                    <Text style={styles.chartTitle}>Area Chart</Text>
                    <ChartView 
                        style={{height:300, marginHorizontal:5, backgroundColor:'#2a2a2b'}} 
                        config={confArea} 
                        options={options}
                        stock={true}
                        theme={blakie}>                    
                    </ChartView>
                    <Text style={styles.chartTitle}>OHLC Stock Chart</Text>
                    <ChartView 
                        style={{height:300, marginHorizontal:5, backgroundColor:'#2a2a2b'}} 
                        config={confStock} 
                        options={options}
                        stock={true}
                        theme={blakie}>                    
                    </ChartView>
                    <Text style={styles.chartTitle}>Line Chart</Text>
                    <ChartView 
                        style={{height:300, marginHorizontal:5, backgroundColor:'#2a2a2b'}} 
                        config={confLine} 
                        options={options}
                        stock={true}
                        theme={blakie}>                    
                    </ChartView>                                                      
                </ScrollView>                  
            :
            <Text>Chart Could not be loaded</Text>  
        )
    }
}

const styles={
    chartTitle: {
        fontSize:16, 
        fontFamily:'Dosis', 
        marginVertical:5, 
        alignSelf:'center',
        color:'white'
    }
}

export default CryptoChartView;