import React, { Component } from 'react';
import "./About.css";
import profile_pic from  "../assets/Amanda.jpg";
import { slideAnimationDuration } from '@mui/x-date-pickers/CalendarPicker/PickersSlideTransition';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Amanda Baker</div>
            <div className="brief_description">
             <p>I am a stay at home mother of three beautiful children. I enjoy history, science and nature.
             I am studying Software Engineering at Arizona State University, and am an avid social justice activist.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}