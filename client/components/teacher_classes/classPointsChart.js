import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getClassGPA } from '../../actions/points_actions';

class PointsChart extends Component {
	constructor (props) {
		super(props);
	}

	componentWillMount () {
		this.props.getClassGPA(this.props.classId);
	}

	render() {
	return (
	  <div>
	    <Doughnut data={
	    	{
		labels: [
			'Avg Class Points',
			'Missing Points',
		],
		datasets: [{
			data: [parseInt(this.props.class_points[0]).toFixed(2), parseInt(this.props.class_points[1]).toFixed(2) - parseInt(this.props.class_points[0]).toFixed(2)],
			backgroundColor: [
			'#FF6384',
			'#36A2EB',
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			]
		}]
		}
	    } />
	  </div>
		)
	}
};

function mapStateToProps(state) {
	return {
		class_points: state.class_points.class_points,
	};
}

export default connect(mapStateToProps, {getClassGPA: getClassGPA})(PointsChart);