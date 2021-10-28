import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
// import MyHeader from '../components/MyHeader';

export default class PressureScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      systolic: '',
      dyastolic: '',
      date: '',
      time: '',
      userId: firebase.auth().currentUser.email,
    };
  }

  PressureData = () => {
    db.collection('PressureData').add({
      systolic: this.state.systolic,
      dyastolic: this.state.dyastolic,
      date: this.state.date,
      time: this.state.time,
      user_id: firebase.auth().currentUser.email,
    });
    this.setState({
      systolic: '',
      dyastolic: '',
      date: '',
      time: '',
    });

    Alert.alert('Data Added Succesfully');
  };

  render() {
    return (
        <ScrollView>
      <View>
        <View style={{ marginTop: '1%', alignSelf: 'center', fontSize: '30%' }}>
          <Text>Pressure</Text>
        </View>

        <Text style={{ marginTop: '-1%' }}>Systolic</Text>

        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}
           onChangeText={(text) => {
            this.setState({
              systolic: text,
            });
          }}
          placeholder={'systolic'}
          value={this.state.insulinUnit}
        />
        <Text>Dyastolic</Text>

        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}
            onChangeText={(text) => {
            this.setState({
              dyastolic: text,
            });
          }}
          placeholder={'dyastolic'}
          value={this.state.insulinUnit}
        />

        <Text>date</Text>

        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}
            onChangeText={(text) => {
            this.setState({
              date: text,
            });
          }}
          placeholder={'DD/MM/YYYY'}
          value={this.state.insulinUnit}
        />

        <Text>Time</Text>

        <TextInput
        style={{
        height: 40,
            margin: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}
            onChangeText={(text) => {
            this.setState({
              time: text,
            });
          }}
          placeholder={'time'}
          value={this.state.insulinUnit}
        />
        

        <TouchableOpacity style={styles.button}
            onPress={()=>{
            this.PressureData()
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
