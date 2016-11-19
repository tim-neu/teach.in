import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { postTeacherPhoto, getTeacherPhoto } from '../actions/teacher_profile_actions'

  class UserInformation extends React.Component {
  constructor (props) {
    super(props)
    
    this.postTeacherPhoto = this.props.postTeacherPhoto.bind(this);
    this.handlePostTeacherPhoto = this.handlePostTeacherPhoto.bind(this)
    this.getTeacherPhoto = this.props.getTeacherPhoto.bind(this);
    this.getTeacherPhoto();
  };

  handlePostTeacherPhoto(event){
    var selectedFile = document.getElementById('input').files[0];
    this.postTeacherPhoto(selectedFile);
  }

  render () {
    return (
      <div>
        <img id="profile-photo" src={this.props.profilePicture} />
        <h4>Mr. Neumann</h4>
        <form>
          <input id="nameValue" type="text" />
          <input id="input" type="file" name="pic" />
        </form>
        <button onClick={this.handlePostTeacherPhoto}> Submit </button>
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    profilePicture: state.profilePicture.profilePicture
  };
}

export default connect(mapStateToProps, {postTeacherPhoto: postTeacherPhoto, getTeacherPhoto: getTeacherPhoto})(UserInformation)
