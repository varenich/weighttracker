import React from 'react';
import { StyleSheet, Text, Button, TextInput, Alert, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weight: '', waist: '', breast: ''};
      this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton() {
    fetch('https://www.corezoid.com/api/1/json/public/460491/286a8cbc2117be2b4ab4314b348fcc184482e053', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        weight: this.state.weight,
        waist: this.state.waist,
        breast: this.state.breast
      }),
    });
    // .catch( error => console.log('JSON Fetch error : ' + error) );
    Alert.alert('Данные отправлены')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Вес, кг</Text>
        <TextInput
          style={styles.input}

          placeholder="111,1"
          onChangeText={(text) => this.setState({weight: {text}})}
        />
        <Text style={styles.text}>Объем талии, см</Text>
        <TextInput
          style={styles.input}

          placeholder="111,1"
          onChangeText={(text) => this.setState({waist: {text}})}
        />
        <Text style={styles.text}>Объем груди, см</Text>
        <TextInput
          style={styles.input}

          placeholder="111,1"
          onChangeText={(text) => this.setState({breast: {text}})}
        />
        <Button
            onPress={this._onPressButton}
            title="Сохранить"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 30,
    alignItems: 'stretch'
  },
  text: {
    fontSize: 30
  },
  input: {
    height: 40,
    borderWidth: 1
  }
});
