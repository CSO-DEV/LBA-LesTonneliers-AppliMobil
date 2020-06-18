import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      passWord: '',
      name: '',
      lastName: '',
      phone: '',
    };
  }

  // Récupération des données saisies
  handleInput = (text, type) => {
    if (type == 'mail') {
      this.setState({mail: text});
    } else if (type == 'name') {
      this.setState({name: text});
    } else if (type == 'lastName') {
      this.setState({lastName: text});
    } else if (type == 'phone') {
      this.setState({phone: text});
    } else if (type == 'passWord') {
      this.setState({passWord: text});
    }
  };

  // Envoi des données Users
  SignAuthSend = () => {
    const body = {
      email: this.state.mail,
      tel: this.state.passWord,
    };

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    };
    //Envoie de la requete
    fetch('http://192.168.1.54:8080/api/auth/signup', options)
      .then(response => response.json())
      .then(
        data => {
          console.log('Vous enregisté');
        },
        error => {
          console.log(error);
        },
      );
    //Lnance l'enregistrement du message
    this.SignClientSend;
  };

  // Envoi des données Client
  SignClientSend = () => {
    const body = {
      nom: this.state.name,
      prenom: this.state.lastName,
      email: this.state.mail,
      tel: this.state.phone,
    };

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    };
    //Envoie de la requete
    fetch('http://192.168.1.54:8080/connexion/inscription', options)
      .then(response => response.json())
      .then(
        data => {
          console.log('Vous enregisté');
        },
        error => {
          console.log(error);
        },
      );
  };

  render() {
    return (
      <View style={styles.border}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
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
          INSCRIPTION
        </Text>
        <Text style={[styles.text, {fontSize: 15}]}>Nom :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Votre nom"
          onChangeText={name => this.handleInput(name, 'name')}
          value={this.state.name}
        />
        <Text style={[styles.text, {fontSize: 15}]}>Prénom :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Votre prénom"
          onChangeText={lastName => this.handleInput(lastName, 'lastName')}
          value={this.state.lastName}
        />
        <Text style={[styles.text, {fontSize: 15}]}>Adresse mail :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="votre.adresse@email.com"
          onChangeText={mail => this.handleInput(mail, 'mail')}
          value={this.state.mail}
        />
        <Text style={[styles.text, {fontSize: 15}]}>Téléphone :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="votre numéro de téléphone"
          onChangeText={phone => this.handleInput(phone, 'phone')}
          value={this.state.phone}
        />
        <Text style={[styles.text, {fontSize: 15}]}>Mot de passe :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="minimum 6 caractères"
          onChangeText={passWord => this.handleInput(passWord, 'passWord')}
          value={this.state.passWord}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={this.SignInClient}
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
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
});
