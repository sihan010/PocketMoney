import { Image, StyleSheet, View, WebView } from "react-native";
import React, { Component } from "reactn";

class OriginalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  static navigationOptions = () => {
    return {
      title: "Original Report",
      headerStyle: {
        backgroundColor: "#1A5276"
      },
      headerTintColor: "#E8DAEF",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontFamily: "Dosis",
        fontWeight: "200",
        marginLeft: -40
      }
    };
  };

  stopLoading() {
    this.setState({
      loading: false
    });
  }

  render() {
    let url = this.props.navigation.getParam("url");
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: url }}
          style={{ backgroundColor: "#A9CCE3" }}
          onLoad={() => this.stopLoading()}
        />
        {this.state.loading && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#A9CCE3"
            }}
          >
            <Image
              source={require("../../assets/Spinner/Infinity.gif")}
              style={{ width: 80, height: 80 }}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9CCE3"
  }
});

export default OriginalReport;
