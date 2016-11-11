import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

  class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
        label: 'GPA',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [3.44, 2.11, 4.00, 3.4, 2.6, 3.4, 4.0]
            }
          ]
        }

    };
    this.getCurrentClassGpa();
  };

  componentDidMount(){
    
  }
  getCurrentClassGpa(){
    let that = this;
    console.log(that)
    axios.get('/api/teacher/classes/class/classGPA')
    .then(function (gpa) {
      console.log(gpa, "this is gpa")
      that.setState({
        data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
        label: 'GPA',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [3.44, 2.11, 4.00, 3.4, 2.6, 3.4, gpa.data]
            }
          ]
        }

      })
    })
    .catch(function (error) {
      console.log("this didn't work");
    });
  }

  render () {
    return (
      <div className="col-lg-4">
        <h2>GPA</h2>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default Graph