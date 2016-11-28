import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { postStudentPhoto, getStudentPhoto } from '../../actions/student_profile_actions'

  class StudentInformation extends React.Component {
  constructor (props) {
    super(props)
    
    this.postStudentPhoto = this.props.postStudentPhoto.bind(this);
    this.handlePostStudentPhoto = this.handlePostStudentPhoto.bind(this)
    this.getStudentPhoto = this.props.getStudentPhoto.bind(this);
    this.getStudentPhoto();
  };

  handlePostStudentPhoto(event){
    var selectedFile = document.getElementById('input').files[0];
    this.postStudentPhoto(selectedFile);
  }

  render () {
    var picture;
    if (this.props.studentInformation) {
      picture = this.props.studentInformation.picture_url;
    } else {
      picture = '';
    };

    var name;
    if (this.props.studentInformation) {
      name = this.props.studentInformation.name;
    } else {
      name = null;
    };

    return (
      <div className='top'>
        <img id="profile-photo" src={picture} />
        <h4>{name}</h4>
        <form className='uploadForm'>
          <input id="input" type="file" name="pic" />
        </form>
        <button onClick={this.handlePostStudentPhoto}> Submit </button>
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    studentInformation: state.studentInformation.studentInformation
  };
}

export default connect(mapStateToProps, {postStudentPhoto: postStudentPhoto, getStudentPhoto: getStudentPhoto})(StudentInformation)
