import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
// import MyHeader from '../components/MyHeader'

export default class DiabMedicineScreen extends Component {
  constructor() {
    super();
    this.state = {
      medicine: '',
      date: '',
      time: '',
      userId: firebase.auth().currentUser.email,
    };
  }

  DiabMedicineData = () => {
    db.collection('DiabMedicineData').add({
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

  render() {
    return (
       <ScrollView>
      <View>
        <View
          style={{ marginTop: '10%', alignSelf: 'center', fontSize: '30%' }}>
          <Text>Medicine</Text>
        </View>

        <Text style={{ marginTop: '10%' }}>Medicine</Text>

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
          placeholder={'Time'}
          value={this.state.time}
        />

        <TouchableOpacity style={styles.button}
           onPress={()=>{
            this.DiabMedicineData()
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
  keyBoardStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
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
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});
