import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      name: '',
      lastName: '',
      phone: '',
      message: '',
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
    } else if (type == 'message') {
      this.setState({message: text});
    }
  };

  // Envoi des données du formulaire
  FormSend = () => {
    const body = {
      nom: this.state.name,
      prenom: this.state.lastName,
      email: this.state.mail,
      tel: this.state.phone,
      message: this.state.message,
    };
    console.log(body);
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    };
    //Envoie de la requete
    fetch('http://192.168.1.54:8080/connexion/formulaire', options)
      .then(response => response.json())
      .then(
        data => {
          console.log('Votre message a été pris en compte, merci');
        },
        error => {
          console.log(error);
        },
      );
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={[styles.border, {backgroundColor: 'white'}]}>
          <Text
            style={[
              styles.text,
              {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
            ]}>
            LAISSEZ-NOUS VOTRE MESSAGE !
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
          <Text style={[styles.text, {fontSize: 15}]}>Votre message :</Text>
          <TextInput
            style={{
              height: 100,
              borderColor: 'gray',
              borderWidth: 1,
              textAlignVertical: 'top',
            }}
            placeholder="votre message"
            multiline={true}
            onChangeText={message => this.handleInput(message, 'message')}
            value={this.state.message}
          />
          <TouchableOpacity
            onPress={this.FormSend}
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
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <Image
              source={require('../../img/logo_lestonneliers.png')}
              resizeMode="cover"
              style={{width: 320, height: 100}}
            />
            <Text
              style={[
                styles.text,
                {textAlign: 'center', marginTop: 20, fontSize: 16},
              ]}>
              Résidence les Tonneliers
              {'\n'}7 Rue des Tonneliers
              {'\n'}21200 Beaune, France
            </Text>
            <Text
              style={[
                styles.text,
                {textAlign: 'center', marginTop: 20, fontSize: 16},
              ]}>
              Tel : (+33) 07.60.40.49
            </Text>
            <Text style={[styles.text, {textAlign: 'center', fontSize: 16}]}>
              Email : contact@lestonneliers.fr
            </Text>

            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: 'rgb(148, 23, 30)',
                width: 200,
              }}>
              <Text
                style={[
                  styles.text,
                  {color: 'white', padding: 2, textAlign: 'center'},
                ]}>
                Plan d'accès et Itinéraire
              </Text>
            </TouchableOpacity>
            <Image
              source={require('../../img/map_beaune.png')}
              style={{marginTop: 10, height: 300, width: 380}}
              resizeMode="cover"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
});
