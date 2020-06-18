import React, {Component} from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
    this.loadingWait();
  }

  loadingWait = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Accueil');
    }, 3000);
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../img/logo_lestonneliers.png')}
          style={{width: 200, height: 100}}
          resizeMode="cover"
        />
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
}

export default SplashScreen;

//
