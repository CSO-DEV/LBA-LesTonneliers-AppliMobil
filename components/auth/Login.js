import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      passWord: '',
    };
  }

  // Récupération des données saisies
  handleInput = (text, type) => {
    if (type == 'mail') {
      this.setState({mail: text});
    } else if (type == 'passWord') {
      this.setState({passWord: text});
    }
  };

  // Envoi des données du formulaire de login
  logInSend = () => {
    const body = {
      email: this.state.mail,
      tel: this.state.passWord,
    };
    console.log(body);
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    };
    //Envoie de la requete
    fetch('http://192.168.1.54:8080/api/auth/login', options)
      .then(response => response.json())
      .then(
        data => {
          console.log('Vous êtes connecté');
        },
        error => {
          console.log(error);
        },
      );
  };

  // Affichage
  render() {
    return (
      <View style={styles.border}>
        <Text
          style={[
            styles.text,
            {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
          ]}>
          CONNEXION
        </Text>
        <View>
          <Text style={[styles.text, {fontSize: 15}]}>Adresse mail :</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="votre.adresse@email.com"
            onChangeText={mail => this.handleInput(mail, 'mail')}
            value={this.state.mail}
          />
          <Text style={styles.text}>Mot de passe :</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="minimum 6 caractères"
            onChangeText={passWord => this.handleInput(passWord, 'passWord')}
            secureTextEntry={true}
            value={this.state.passWord}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={this.logInSend}
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
        <View
          style={{
            flew: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginTop: 10,
          }}>
          <Text style={styles.text}>Mot de passe oublié ? :</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('PassWord', {
                propsMail: this.state.mail,
              })
            }
            style={{marginLeft: 5}}>
            <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
              Nouveau mot de passe
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flew: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginTop: 10,
          }}>
          <Text style={styles.text}>Vous n'avez pas de compte ? :</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignIn')}
            style={{marginLeft: 5}}>
            <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
              Inscription
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
});
