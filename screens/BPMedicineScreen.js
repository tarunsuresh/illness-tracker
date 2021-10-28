import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
  ScrollView,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
// import MyHeader from '../components/MyHeader';

export default class BPMedicineScreen extends Component {
  constructor() {
    super();
    this.state = {
      medicine: '',
      date: '',
      time: '',
      userId: firebase.auth().currentUser.email,
    };
  }

  BpMedicineData = () => {
    db.collection('BpmedicineData').add({
      medicine: this.state.medicine,
      date: this.state.date,
      time: this.state.time,
      user_id: firebase.auth().currentUser.email,
    });
    this.setState({
      medicine: '',
      date: '',
      time: '',
    });

    Alert.alert('Data Added Succesfully');
  };

  ShowCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    Alert.alert(date + '-' + month + '-' + year);
  };

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.MainContainer}>
            <Button title="Show Current Date" onPress={this.ShowCurrentDate} />
          </View>

          <View
            style={{ marginTop: '10%', alignSelf: 'center', fontSize: '30%' }}>
            <Text>BPMedicine</Text>
          </View>

          <Text style={{ marginTop: '10%' }}>BPMedicine</Text>

          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              justifyContent: 'center',
            }}
            onChangeText={(text) => {
              this.setState({
                medicine: text,
              });
            }}
            placeholder={'medicine'}
            value={this.state.medicine}
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
            value={this.state.date}
          />

          <View></View>

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
            value={this.state.time}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.BpMedicineData();
            }}>
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
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#F5FCFF',
      margin: 10,
    },
  },
});
