import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Reservation from './Reservation';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {imgApp: [], equipApp: []},
    };
  }

  componentDidMount() {
    this.dataSearch();
  }
  //Récupération des données collection Appartement à partir de l'ID
  dataSearch = () => {
    const options = {
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      mode: 'cors',
    };
    fetch(
      'http://192.168.1.54:8080/appartement/detailsappartement?id=' + //envoie du paramètre de recherche dans le chemin
        this.props.navigation.state.params.propsId,
      options,
    )
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

  //Construction de l'affichage des images
  mapImg = () => {
    return this.state.data.imgApp.map((element, index) => {
      let test = '../..' + '/img/p7.jpg';
      return (
        <Image key={index} source={require(test)} style={[styles.image, {}]} />
      );
    });
  };

  //Construction de l'affichage des équipements
  mapEquip = () => {
    return this.state.data.equipApp.map((element, index) => {
      return (
        <View
          key={index}
          style={{
            paddingHorizontal: 5,
            flexDirection: 'row',
          }}>
          <Image source={require('../../img/barrel.png')} />
          <Text style={[styles.text, {color: 'black'}]}>
            {element}
            {'\n'}
          </Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Image style={{}} source={require('../../img/barrel.png')} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Accueil')}>
            <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
              Retour Accueil
            </Text>
          </TouchableOpacity>
          <Image style={{}} source={require('../../img/barrel.png')} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 5,
          }}>
          <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>
            {this.state.data.nomApp}
          </Text>
          <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>
            Note : {this.state.data.noteApp}
          </Text>
        </View>
        <View style={{flex: 2}}>
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  marginLeft: 5,
                  marginVertical: 5,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={[
                      styles.text,
                      {
                        color: 'black',
                        fontSize: 15,

                        width: 245,
                      },
                    ]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                }}>
                {this.mapImg()}
              </View>
            </View>
            <View />
            <View style={{marginTop: 10, backgroundColor: '#d4d4d4'}}>
              <Text
                style={[
                  styles.text,
                  {
                    fontWeight: 'bold',
                    fontSize: 15,
                  },
                ]}>
                Les Equipements
              </Text>
              <View
                style={{
                  marginTop: 5,
                }}>
                {this.mapEquip()}
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1, backgroundColor: 'ivory'}}>
          <View style={{alignItems: 'center'}}>
            <Reservation propsData={this.state.data} />
          </View>
        </View>
      </View>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
  image: {
    marginHorizontal: 5,
    marginBottom: 5,
    height: 150,
    width: 150,
  },
});
