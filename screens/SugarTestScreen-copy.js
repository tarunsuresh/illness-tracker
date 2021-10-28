import React, { useState } from 'react';
import {
  View,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import DatePicker from 'react-native-datepicker';

export default class SugarTestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      sugartimepicker: 'fasting',
      sugarvalue: '',
      date: new Date().toDateString(),
      time: '',
      userId: firebase.auth().currentUser.email,
    };
    //   const [selectedValue, setSelectedValue] = useState('fasting');
  }

  setValueFromPicker(itemValue, itemIndex) {
    this.setState({
      sugartimepicker: itemValue,
    });
  }
  addSugarTestData = () => {
    db.collection('SugarTestData').add({
      sugartimepicker: this.state.sugartimepicker,
      sugarvalue: this.state.sugarvalue,
      date: this.state.date,
      time: this.state.time,
      user_id: firebase.auth().currentUser.email,
    });
    this.setState({
      sugarvalue: '',
      date: new Date().toDateString(),
      time: '',
    });

    Alert.alert('Data Added Succesfully');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Time</Text>
        </View>
        <Picker
          selectedValue={this.state.sugartimepicker}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            //setSelectedValue(itemValue);
            this.setState({
              sugartimepicker: itemValue,
            });
          }}>
          <Picker.Item label="Fasting" value="fasting" />
          <Picker.Item label="1Hour after eating" value="1hour" />
          <Picker.Item label="2Hour after eating" value="2hour" />
          <Picker.Item label="Random" value="random" />
        </Picker>
        <Text style={{ marginTop: '10%' }}>Sugar Level</Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}
          onChangeText={(text) => {
            this.setState({
              sugarvalue: text,
            });
          }}
          placeholder={'Sugarvalue'}
          value={this.state.sugarvalue}
        />
        <Text>Date</Text>
        /*
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
        */
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.addSugarTestData();
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

/*
  const [selectedValue, setSelectedValue] = useState('java');
  return (
     <ScrollView>
    <View style={styles.container}>
      <Text>Time</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setSelectedValue(this.state.sugartimepicker)}>
        <Picker.Item label="Fasting" value="java" />
        <Picker.Item label="1Hour after eating" value="j" />
        <Picker.Item label="2Hour after eating" value="ja" />
        <Picker.Item label="Random" value="js" />
      </Picker>

      <View>

        <Text style={{ marginTop: '10%' }}>Sugar Level</Text>

        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}
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
        />

        <TouchableOpacity style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
