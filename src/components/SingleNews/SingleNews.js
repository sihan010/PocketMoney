import React, {Component} from 'reactn';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

class SingleNews extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Single News Details</Text>   
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity> 
            </View>
        );
      }
}
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
});

export default SingleNews;