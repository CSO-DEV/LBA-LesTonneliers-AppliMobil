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

class Apropos extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 10, paddingHorizontal: 10}}>
          <Text
            style={[
              styles.text,
              {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
            ]}>
            BEAUNE
          </Text>
          <View style={{flex: 1}}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              {'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Image
              resizeMode="cover"
              source={require('../../img/' + 'p7.jpg')}
              style={{
                resizeMode: 'stretch',
                width: 100,
                height: 100,
                margin: 10,
              }}
            />
          </View>
        </View>
        <View style={{padding: 20}}>
          <Text
            style={[
              styles.text,
              {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
            ]}>
            LES TONNELIERS
          </Text>
          <View style={{flex: 1}}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              {'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Image
              resizeMode="cover"
              source={require('../../img/' + 'p7.jpg')}
              style={{
                resizeMode: 'stretch',
                width: 100,
                height: 100,
                margin: 10,
              }}
            />
          </View>
        </View>
        <View style={{padding: 20}}>
          <Text
            style={[
              styles.text,
              {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
            ]}>
            NOTRE CONCEPT DE LOCATION
          </Text>
          <View style={{flex: 1}}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              {'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Image
              resizeMode="cover"
              source={require('../../img/' + 'p7.jpg')}
              style={{
                resizeMode: 'stretch',
                width: 100,
                height: 100,
                margin: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Apropos;

const styles = StyleSheet.create({
  text: {
    color: 'rgb(148, 23, 30)',
    fontFamily: 'Josefin Sans, sans-serif',
  },
  border: {
    padding: 10,
  },
});
