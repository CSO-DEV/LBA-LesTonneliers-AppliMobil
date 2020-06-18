import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // Appel aux données
  componentDidMount() {
    this.getAppartement();
  }

  //Récupération des données collection Appartement
  getAppartement = () => {
    const options = {
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      mode: 'cors',
    };
    fetch('http://192.168.1.54:8080/appartement/', options)
      .then(res => res.json())
      .then(
        data => {
          this.setState({data: data});
        },
        error => {
          console.log(error);
        },
      );
  };

  ShowApp = () => {
    return this.state.data.map((element, index) => {
      return (
        <View
          key={index}
          style={{
            marginVertical: 5,
            padding: 10,
            flexDirection: 'column',
            backgroundColor: '#d4d4d4',
            height: 310,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image style={{}} source={require('../../img/barrel.png')} />
              <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>
                {element.nomApp}
              </Text>
            </View>

            <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>
              Note : {element.noteApp}
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../../img/' + 'p7.jpg')}
              style={{
                height: 100,
                width: 100,
                resizeMode: 'stretch',
                margin: 5,
              }}
            />
            <Image
              source={require('../../img/' + 'p7.jpg')}
              style={{
                height: 100,
                width: 100,
                resizeMode: 'stretch',
                margin: 5,
              }}
            />
            <Image
              source={require('../../img/' + 'p7.jpg')}
              style={{
                height: 100,
                width: 100,
                resizeMode: 'stretch',
                margin: 5,
              }}
            />
          </View>
          <View style={{height: 120}}>
            <View style={{height: 80}}>
              <Text style={[styles.text, {fontSize: 12, marginVertical: 5}]}>
                {element.descPage1App}
              </Text>
            </View>
            <View style={{height: 30}}>
              <Text
                style={[
                  styles.text,
                  {fontSize: 12, marginVertical: 5, paddingRight: 10},
                ]}>
                {this.state.data[index].caracApp}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Detail', {
                  propsId: this.state.data[index]._id,
                })
              }
              style={{
                backgroundColor: '#d4d4d4',
                width: 100,
              }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: 'white',
                    padding: 2,
                    textAlign: 'center',
                    backgroundColor: 'rgb(148, 23, 30)',
                  },
                ]}>
                En savoir plus..
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <Image
          source={require('../../img/Panoramique_beaune.jpg')}
          style={{height: 180, resizeMode: 'cover'}}
        />
        <Text
          style={[
            styles.text,
            {
              fontSize: 25,
              textAlign: 'center',
              backgroundColor: '#d4d4d4',
              fontWeight: 'bold',
              marginBottom: 1,
            },
          ]}>
          Location saisonnière au coeur de Beaune
        </Text>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'grey'}}>
            {this.ShowApp()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Accueil;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
});
