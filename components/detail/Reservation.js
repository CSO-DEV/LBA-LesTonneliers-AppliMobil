import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initPrice: this.props.propsData.prixNuit, //data: this.props.propsData,
      initMenage: 0, // Extraction prix collection frais
      initService: 0, // Extraction prix collection frais
      initTaxe: 0, // Extraction prix collection frais
      show: false,
      travelers: 0,
      nuit: 0,
      menage: 0,
      service: 0,
      taxe: 0,
      total: 0,
      totalNuite: 0,
      getDateAr: '',
      getDateDep: '',
    };
    this.dateArrivee = 0;
    this.dateDepart = 0;
    this.calculDate = 0;
    this.valDate = '';
  }

  componentDidMount() {
    this.getFrais();
  }

  //Extraction frais collection tarifs
  getFrais = () => {
    const options = {
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      mode: 'cors',
    };
    fetch('http://192.168.1.54:8080/reservation/frais', options)
      .then(res => res.json())
      .then(
        data => {
          this.setState({initMenage: data.fraisMenage});
          this.setState({initService: data.fraisService});
          this.setState({initTaxe: data.taxeSejour});
        },
        error => {
          console.log(error);
        },
      );
  };

  /*
  /*calculation of the number of nuits
  /*Calcul du nombre de nuit
  */
  /*recovery of data entry - récupération de la saisie de donnée*/
  getnuit = (dataDate, type) => {
    this.valDate = dataDate;
    //formatting the date entry - Formatage de saisie de date
    if (type == 'arrivee') {
      if (this.valDate.length == 2) {
        this.valDate = this.valDate + '/';
        this.setState({getDateAr: this.valDate});
      } else if (this.valDate.length == 5) {
        this.valDate = this.valDate + '/';
        this.setState({getDateAr: this.valDate});
      }
    } else {
      if (this.valDate.length == 2) {
        this.valDate = this.valDate + '/';
        this.setState({getDateDep: this.valDate});
      } else if (this.valDate.length == 5) {
        this.valDate = this.valDate + '/';
        this.setState({getDateDep: this.valDate});
      }
    }

    //dates formatting - Formatage des dates aaaa-mm-dd
    if (this.valDate.length == 10) {
      let calculJour = this.valDate.substr(0, 2);
      let calculMois = this.valDate.substr(3, 2);
      let calculAnnee = this.valDate.substr(6, 4);
      this.calculDate = calculAnnee + '-' + calculMois + '-' + calculJour;
      if (type == 'arrivee') {
        this.dateArrivee = this.calculDate;
      } else if (type == 'depart') {
        this.dateDepart = this.calculDate;
      }
      this.valDate = '';
      //dates formatting - Formatage des dates
      if (this.dateArrivee != 0 && this.dateDepart != 0) {
        this.calculnuit(this.dateArrivee, this.dateDepart);
      }
    }
  };
  /*calculation of the number of nuits - Calcul du nombre de nuits*/
  calculnuit = (dateA, dateB) => {
    let date1 = new Date(dateA);
    let date2 = new Date(dateB);
    let diff = this.dateDiff(date1, date2);
    let nnuit = diff.day;
    if (nnuit < 0) {
      alert("Attention, la date de départ est inférieure à la date d'arrivée");
      e.target.value = '';
    } else {
      this.state.nuit = nnuit;
      this.setState({nuit: nnuit});
      this.coast();
    }
  };
  /*Calcul du nombre de jour entre 2 dates*/
  dateDiff = (date1, date2) => {
    let diff = {}; // Initialisation du retour
    let tmp = date2 - date1;
    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes
    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes
    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures
    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;
    return diff;
  };

  /*
  /*calculation of the number of voyageurs
  /*calcul du nombre de voyageurs
  */
  handleInputTraveler = type => {
    let n = this.state.travelers;
    if (type == 'more' && n < 6) {
      n++;
    } else if (type == 'less' && n > 1) {
      n--;
    }
    this.setState({travelers: n});
    this.coast();
  };

  //Calcul des nuitées
  coast = () => {
    //Calcul du prix chambre * nombre de nuit
    let cout1 = this.state.initPrice * this.state.nuit;
    this.state.totalNuite = cout1;
    this.setState({totalNuite: cout1});
    //Calcul du prix ménage * nombre de nuit
    let cout2 = this.state.initMenage * this.state.nuit;
    this.state.menage = cout2;
    this.setState({menage: cout2});
    //Calcul du prix service * nombre de nuit
    let cout3 = this.state.initService * this.state.nuit;
    this.state.service = cout3;
    this.setState({service: cout3});
    //Calcul du prix service * nombre de nuit
    let cout4 = this.state.initTaxe * this.state.nuit * this.state.travelers;
    this.state.taxe = cout4;
    this.setState({taxe: cout4});
    //Calcul global
    let cout5 = cout1 + cout2 + cout3 + cout4;
    this.state.total = cout5;
    this.setState({total: cout5});
  };

  render() {
    return (
      <View style={{width: 380}}>
        <View style={{marginHorizontal: 5}}>
          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={[styles.text, {fontWeight: 'bold', fontSize: 15}]}>
                {this.props.propsData.prixNuit}
              </Text>
              <Text style={[styles.text, {}]}>€ / nuit</Text>
            </View>

            <TouchableOpacity
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
                Réserver
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 20}}>
              <Text style={[styles.text, {}]}>Arrivée :</Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 100,
                }}
                placeholder="jj/mm/aaaa"
                onChangeText={dataDate => this.getnuit(dataDate, 'arrivee')}
                defaultValue={this.state.getDateAr}
              />
            </View>
            <View>
              <Text style={[styles.text, {}]}>Départ :</Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 100,
                }}
                placeholder="jj/mm/aaaa"
                onChangeText={dataDate => this.getnuit(dataDate, 'depart')}
                defaultValue={this.state.getDateDep}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            <Text style={[styles.text, {}]}>Nombre de voyageurs :</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.handleInputTraveler('more')}
                //value={}
                style={{
                  width: 25,
                  backgroundColor: 'rgb(148, 23, 30)',
                  marginHorizontal: 5,
                }}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: 'white',
                      textAlign: 'center',
                    },
                  ]}>
                  +
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.text,
                  {
                    color: 'rgb(148, 23, 30)',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: 20,
                  },
                ]}>
                {this.state.travelers}
              </Text>
              <TouchableOpacity
                onPress={() => this.handleInputTraveler('less')}
                //value={less}
                style={{
                  width: 25,
                  backgroundColor: 'rgb(148, 23, 30)',
                  marginHorizontal: 5,
                }}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: 'white',
                      textAlign: 'center',
                    },
                  ]}>
                  -
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin: 5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.text, {}]}>
                {this.props.propsData.prixNuit}€ x {this.state.nuit} nuit(s) :
              </Text>
              <Text style={[styles.text, {}]}>{this.state.totalNuite}€</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.text, {}]}>Frais de ménage :</Text>
              <Text style={[styles.text, {}]}>{this.state.menage}€</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.text, {}]}>Frais de service :</Text>
              <Text style={[styles.text, {}]}>{this.state.service}€</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.text, {}]}>Taxe de séjour :</Text>
              <Text style={[styles.text, {}]}>{this.state.taxe}€</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>Total :</Text>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>
                {this.state.total}€
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Reservation;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
});
