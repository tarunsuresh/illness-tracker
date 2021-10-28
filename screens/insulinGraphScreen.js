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

  getInsulinDetails = () => {
    db.collection('insulinData')
      .where('user_id', '==', this.state.userId)
      .onSnapshot((snapshot) => {
        var allData = [];
        var allDate = [];
        snapshot.docs.map((doc) => {
          var insulinUnit = doc.data().insulin_unit;
          var date = doc.data().date;
          allData.push(parseInt(insulinUnit));
          allDate.push(date);
        });
        this.setState({
          allData: allData,
          allDate: allDate,
        });
      });
  };

  componentDidMount() {
    this.getInsulinDetails();
    console.log(this.state.allData);
  }

  render() {
    const data = this.state.allData;
    const date = this.state.allDate;

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
    // All react-native-svg-charts components support full flexbox and therefore all
    // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
    // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
    // and then displace the other axis with just as many pixels. Simple but manual.

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
