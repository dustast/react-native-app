import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends React.Component {
  state = {
    placeText: "",
    place: []
  }

onChangedHandler = (value) => {
this.setState({
    placeText: value
  });
};

addPlaceHandler = () => {
  if (this.state.placeText.trim() === "") {
    return;
  }

  this.setState(prevState => {
    return {
    place: prevState.place.concat(prevState.placeText)
    };
  });
};

  render() {
    const placesOutput = this.state.place.map((place, i) => 
      <Text key={i}>{place}</Text>
    );
    return (
      <View style={styles.container}>
        <View style = {styles.inputContainer}>
      <TextInput
          style = {{width: "70%"}}
          value = {this.state.placeText}
          onChangeText = {this.onChangedHandler} 
          placeholder = "Enter an cool place" 
          />
          <Button
            onPress= {this.addPlaceHandler}
            style = {{width: "30%"}}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
       </View>
      <View>
      <Text>{placesOutput}</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  }
});
