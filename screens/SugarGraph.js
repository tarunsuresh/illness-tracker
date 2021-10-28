import React from 'react';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class InsulinGraphScreen extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      allData: [],
      allDate: [],
    };
  }

  getSugarValueDetails = () => {
    db.collection('SugarTestData')
      .where('user_id', '==', this.state.userId)
      .onSnapshot((snapshot) => {
        var allData = [];
        var allDate = [];
        snapshot.docs.map((doc) => {
          var sugarvalue = doc.data().sugarvalue;
          var date = doc.data().date;
          allData.push(parseInt(sugarvalue));
          allDate.push(date);
        });
        this.setState({
          allData: allData,
          allDate: allDate,
        });
      });
  };

  componentDidMount() {
    this.getSugarValueDetails();
    console.log(this.state.allData);
  }

  render() {
    const data = this.state.allData;
    const date = this.state.allDate;

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    

    return (
      <View style={{ height: 400, padding: 20, flexDirection: 'row' }}>
        <YAxis
          data={data}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={verticalContentInset}
            svg={{ stroke: 'rgb(134, 65, 244)' }}>
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={date}
          formatLabel={(index,date) => date}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
      </View>
    );
  }
}
