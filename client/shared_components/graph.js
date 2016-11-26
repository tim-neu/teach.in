import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';

  class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
              labels: [
              ],
              datasets: [{
                data: [300, 100],
                backgroundColor: [
                '#01ABE9',
                '#F54B1A',
                ],
                hoverBackgroundColor: [
                '#01ABE9',
                '#F54B1A',
                ]
              }]
            }
          }
    this.getCurrentClassGpa();
  };

  getCurrentClassGpa(){
    let that = this;
    axios.get('/api/teacher/classes/class/classGPA')
    .then(function (gpa) {
      that.setState({
        data: {
              labels: [
              ],
              datasets: [{
                data: [300, 100],
                backgroundColor: [
                '#01ABE9',
                '#F54B1A',
                ],
                hoverBackgroundColor: [
                '#01ABE9',
                '#F54B1A',
                ]
              }]
            }
      })
    })
    .catch(function (error) {
      console.log("this is the error with the class gpa", error);
    });
  }

  render () {
    return (
      <div className = "col-lg-6">
        <h4>GPA</h4>
        <Doughnut data={this.state.data} />
      </div>
    );
  }
}

export default Graph