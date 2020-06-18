import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

class PassWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      passWord: '',
    };
  }

  //Enregistrement des champs
  handleInput = (text, type) => {
    if (type == 'passWord') {
      this.setState({passWord: text});
    }
    if (type == 'mail') {
      this.setState({mail: text});
    }
  };

  // A créer dans le Back  des tonneliers
  // GET : vérification mail
  // PUT : modification mot de passe (si mail existant dans Users)

  render() {
    return (
      <View style={styles.border}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Image style={{}} source={require('../../img/barrel.png')} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
              Retour à la connection
            </Text>
          </TouchableOpacity>
          <Image style={{}} source={require('../../img/barrel.png')} />
        </View>
        <Text
          style={[
            styles.text,
            {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
          ]}>
          CHANGEMENT MOT DE PASSE
        </Text>
        <Text style={[styles.text, {fontSize: 15}]}>Adresse email :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="votre.adresse@email.com"
          onChangeText={mail => this.handleInput(text, 'mail')}
          value={this.state.mail}
        />
        <Text style={[styles.text, {fontSize: 15}]}>
          Nouveau mot de passe :
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="minimum 6 caractères"
          onChangeText={passWord => this.handleInput(text, 'passWord')}
          value={this.state.passWord}
        />
        <View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: 'rgb(148, 23, 30)',
              width: 100,
            }}>
            <Text
              style={[
                styles.text,
                {color: 'white', padding: 2, textAlign: 'center'},
              ]}>
              Envoyer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PassWord;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
});
