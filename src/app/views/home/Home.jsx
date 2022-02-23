import AddProfileForm from "../../components/AddProfileForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/Home.css";
import firefighter from "../../../img/firefighter.png";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [carbonMonoxideData, setCarbonMonoxideData] = useState("");
  const [heartRateData, setHeartRateData] = useState("");
  const [methaneData, setMethaneData] = useState("");
  useEffect(() => {
    const interval = setInterval(async () => {
      await axios
        .get("http://localhost:3001/profiles/readRFModule")
        .then((res) => {
          console.log(res.data);
          setHeartRateData(res.data.beats_per_minute);
          setCarbonMonoxideData(res.data.co_level);
          setMethaneData(res.data.methane_level);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
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
              <div className="profileInfo">
                <p>
                  <strong>name:</strong> {item.firstName + " " + item.lastName}
                </p>
                <p>
                  <strong>emergency contact:</strong> {item.emergencyContact}
                </p>
                <p>
                  <strong>Heart Rate:</strong> {heartRateData}
                </p>
                <p>
                  <strong>Carbon Monoxide Levels:</strong> {carbonMonoxideData}
                </p>
                <p>
                  <strong>Methane Levels: </strong> {methaneData}
                </p>
                <p>
                  <strong>health conditions:</strong> {item.healthConditions}
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
          ))}
      </div>

      {/* each time profile is added, database will be updated and the updated profiles will render via map function, */}
    </div>
  );
};

export default Home;
