import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Header,
  Alert,
  ScrollView
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

// import firebase from 'firebase';
// import db from '../config'
// import MyHeader from '../components/MyHeader';

export default class InsulinScreen extends Component {
  constructor() {
    super();
    this.state = {
      insulinUnit: '',
      date: '',
      time: '',
      userId: firebase.auth().currentUser.email,
    };
  }

  addInsulinData = () => {
    db.collection('insulinData').add({
      insulin_unit: this.state.insulinUnit,
      date: this.state.date,
      time: this.state.time,
      user_id: firebase.auth().currentUser.email,
    });
    this.setState({
       insulinUnit: '',
      date: '',
      time: '',
    })

    Alert.alert("Insulin Data Added Succesfully")
  };

  render() {
    return (
       <ScrollView>
      <View>
        <View
          style={{ marginTop: '10%', alignSelf: 'center', fontSize: '30%' }}>
          <Text>Insulin</Text>
        </View>

        <Text style={{ marginTop: '10%' }}>Insulin Unit</Text>

        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}
          onChangeText={(text) => {
            this.setState({
              insulinUnit: text,
            });
          }}
          placeholder={'insulin Uint'}
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
          placeholder={'Time'}
          value={this.state.time}
        />

        <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.addInsulinData()
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
