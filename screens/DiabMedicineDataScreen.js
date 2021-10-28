import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class DiabMedicineDataScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      diabmedicineList: [],
    };
    this.requestRef = null;
  }

  getDiabMedicineList = () => {
    this.requestRef = db
      .collection('DiabMedicineData')
      .onSnapshot((snapshot) => {
        var diabmedicineList = snapshot.docs.map((doc) => doc.data());
        this.setState({
          diabmedicineList: diabmedicineList,
        });
      });
  };

  componentDidMount() {
    this.getDiabMedicineList();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.medicine}
        subtitle={item.date}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
         <Text>
          {item.time}
         </Text>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.view}>
        <View style={{ flex: 1 }}>
          {this.state.diabmedicineList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>
                List Of All Medicine Prescribed{' '}
              </Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.diabmedicineList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
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
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
