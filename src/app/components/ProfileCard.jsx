import React, { useEffect, useState } from "react";
import "../../styles/Profiles.css";
import firefighter from "../../img/firefighter.png";

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <p>
          <strong>name:</strong> {props.firstName + " " + props.lastName}
        </p>
        <p>
          <strong>emergency contact:</strong> {props.emergencyContact}
        </p>
        <p>
          <strong>Heart Rate:</strong> {props.heartRateData}
        </p>
        <p>
          <strong>Carbon Monoxide Levels:</strong> {props.carbonMonoxideData}
        </p>
        <p>
          <strong>Methane Levels: </strong> {props.methaneData}
        </p>
        <p>
          <strong>health conditions:</strong> {props.healthConditions}
        </p>
      </div>
      <div className="profilePic">
        <img
          src={firefighter}
          alt="firefighter"
          width="100px"
          height="100px"
        ></img>
      </div>
    </div>
  );
};

export default ProfileCard;
