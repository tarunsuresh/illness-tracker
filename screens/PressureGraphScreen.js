import React from 'react';
import { Grid, LineChart, XAxis, YAxis,Text } from 'react-native-svg-charts';
import { View } from 'react-native';
import firebase from 'firebase';
import db from '../config';



export default class PressureGraphScreen extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      allData: [],
      allDate: [],
    };
  }

  getPressureDetails = () => {
    db.collection('PressureData')
      .where('user_id', '==', this.state.userId)
      .onSnapshot((snapshot) => {
        var allData = [];
        var allDate = [];
        snapshot.docs.map((doc) => {
          var pressureData = doc.data().systolic;
          var date = doc.data().date;
          allData.push(pressureData);
          allDate.push(date);
        });
        console.log(allData)
        this.setState({
          allData: allData,
          allDate: allDate,
        });
      });
  };

  componentDidMount() {
    this.getPressureDetails();
  }

  render() {
    
    const data = this.state.allData;
    const date =this.state.allDate;

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
            svg={{ stroke: 'rgb(134,65,244)' }}>
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={date}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
      </View>
    );
  }
}
