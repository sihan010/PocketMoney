import React, { Component } from 'reactn';
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker } from 'react-native';
import { newsFeedAndcategory, NewsFetcher } from '../../Helper/ApiCalls'
import Icon from 'react-native-vector-icons/Ionicons'
import NewsListView from './NewsListView'

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            Feeds: [],
            Categories: [],
            news: [],
            selectedFeed: 'coindesk',
            selectedCategory: 'BTC',
            error: false
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Crypto News',
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
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 20 }}>
                    <Icon name="ios-menu" color="white" size={30} />
                </TouchableOpacity>
            )
        }
    }

    initialAPICall(){
        this.setState({
            error:false,
            loading: true,
        })
        newsFeedAndcategory().then(feedAndCategortData => {
            NewsFetcher().then(newsData => {
                //console.log("All Data Got: ", feedAndCategortData)
                //console.log("All Data Got: ", newsData)
                this.setState({
                    loading: false,
                    Feeds: feedAndCategortData.Feeds,
                    Categories: feedAndCategortData.Categories,
                    news: newsData,
                    error:false
                })
            })
        }).catch(err=>{
            console.log("Data Fetching Failed! ",err)
            this.setState({
                error:true,
                loading: false,
            })
        })
    }

    componentDidMount() {
        this.initialAPICall();
    }

    onChangedPicker(value, type) {
        switch (type) {
            case 'feed': 
                this.setState({ selectedFeed: value, loading: true })
                NewsFetcher(value, this.state.selectedCategory).then(newsData => {
                    console.log("All Data Got: ", newsData)
                    this.setState({
                        loading: false,
                        news: newsData,
                        error:false
                    })
                }).catch(err=>{
                    console.log("Data Fetching Failed! ",err)
                    this.setState({
                        error:true,
                        loading: false,
                    })
                })
            break;
            case 'cat': 
                this.setState({ selectedCategory: value, loading: true })
                NewsFetcher(this.state.selectedFeed, value).then(newsData => {
                    console.log("All Data Got: ", newsData)
                    this.setState({
                        loading: false,
                        news: newsData,
                        error:false
                    })
                }).catch(err=>{
                    console.log("Data Fetching Failed! ",err)
                    this.setState({
                        error:true,
                        loading: false,
                    })
                })
            break;
        }
    }

    feedPickerGenerator(data) {
        const toReturn = data.map((item, key) => {
            return (
                <Picker.Item key={key} label={item.name} value={item.key} />
            )
        })
        return toReturn;
    }

    categoryPickerGenerator(data) {
        const toReturn = data.map((item, key) => {
            return (
                <Picker.Item key={key} label={item.categoryName} value={item.categoryName} />
            )
        })
        return toReturn;
    }

    render() {
        return (
            this.state.error?
                <View style={styles.container}>
                    <Text style={{ fontSize: 16, fontFamily: 'Dosis' }}>Data Fetching Failed !!</Text>
                    <TouchableOpacity onPress={()=>this.initialAPICall()}>
                        <Text>Retry</Text>
                    </TouchableOpacity>
                </View>
            :
            this.state.loading ?
                <View style={styles.container}>
                    <Image source={require('../../assets/Spinner/Infinity.gif')} style={{ width: 100, height: 100 }}></Image>
                    <Text style={{ fontSize: 16, fontFamily: 'Dosis' }}>Loading Surprises...</Text>
                </View>
                :
                <View style={styles.container}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 2, padding: 2, borderRadius: 5 }}>
                            <Text style={{fontSize: 16, fontFamily: 'Dosis', fontWeight: '400' }}>Feed: </Text>
                            <Picker
                                onValueChange={(value) => this.onChangedPicker(value, 'feed')}
                                mode="dropdown"
                                selectedValue={this.state.selectedFeed}
                                style={{ flex: 4 }}>
                                {this.feedPickerGenerator(this.state.Feeds)}
                            </Picker>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 2, padding: 2, borderRadius: 5 }}>
                            <Text style={{fontSize: 16, fontFamily: 'Dosis', fontWeight: '400' }}>Category: </Text>
                            <Picker
                                onValueChange={(value) => this.onChangedPicker(value, 'cat')}
                                mode="dropdown"
                                selectedValue={this.state.selectedCategory}
                                style={{ flex: 4 }}>
                                {this.categoryPickerGenerator(this.state.Categories)}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ flex: 9}}>
                        <NewsListView data={this.state.news} navigation={this.props.navigation} />
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6EAF8'
    }
});

export default NewsList;