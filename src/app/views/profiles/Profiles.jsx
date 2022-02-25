import AddProfileForm from "../../components/AddProfileForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/Home.css";
import firefighter from "../../../img/firefighter.png";
import ProfileCard from "../../components/ProfileCard";

const Profiles = () => {
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
    <div className="profile-container">
      <div className="profile-title">
        <h1>Responders</h1>
      </div>
      {/* <AddProfileForm /> */}
      <div className="profiles">
        {profiles &&
          profiles.map((item) => (
            <ProfileCard
              firstName={item.firstName}
              lastName={item.lastName}
              emergencyContact={item.emergencyContact}
              heartRateData={heartRateData}
              carbonMonoxideData={carbonMonoxideData}
              methaneData={methaneData}
              healthConditions={item.healthConditions}
            />
          ))}
      </div>

      {/* each time profile is added, database will be updated and the updated profiles will render via map function, */}
    </div>
  );
};

export default Profiles;
