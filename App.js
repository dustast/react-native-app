import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';

export default class App extends React.Component {
  state = {
    placeText = ""
  }

onChangedHandler = (value) => {
this.setState({
    placeText:value
  });
};

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style = {{width:300}}
          value = {this.state.placeText}
          onChangeText = {this.onChangedHandler} 
          placeholder = "Enter an cool place" 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
