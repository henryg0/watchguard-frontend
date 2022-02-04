import AddProfileForm from "../../components/AddProfileForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/Home.css";
import firefighter from '../../../img/firefighter.png'

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/profiles")
      .then((res) => {
        setProfiles(res.data.profiles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [profiles]);
  return (
    <div>
      <h1>Responders</h1>
      <AddProfileForm />
      <div className="profiles">
        {profiles &&
          profiles.map((item) => (
            <div className="profileCard">
              <div className='profileInfo'>
                <p>
                  <strong>name:</strong> {item.firstName + " " + item.lastName}
                </p>
                <p>
                  <strong>emergency contact:</strong> {item.emergencyContact}
                </p>
                <p>
                  <strong>blood pressure:</strong> {item.bloodPressure}
                </p>
                <p>
                  <strong>carbon monoxide:</strong> {item.carbonMonoxide}
                </p>
                <p>
                  <strong>temperature:</strong> {item.temperature}
                </p>
                <p>
                  <strong>health conditions:</strong> {item.healthConditions}
                </p>
              </div>
              <div className="profilePic">
                <img
                  src={firefighter}
                  alt="firefighter"
                  width='100px'
                  height='100px'
                ></img>
              </div>
            </div>
          ))}
      </div>

      {/* each time profile is added, database will be updated and the updated profiles will render via map function, */}
    </div>
  );
};

export default Home;
