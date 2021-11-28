import AddProfileForm from "../../components/AddProfileForm";
import React, { useEffect, useState } from "react";
import '../../../styles/Home.css';

const profiles = [
  {
    firstName: "fname1",
    lastName: "lname1",
    emergencyContact: "contact1",
  },
  {
    firstName: "fname2",
    lastName: "lname2",
    emergencyContact: "contact2",
  },
];

function Home() {
  return (
    <div>
      <h1>Profiles</h1>
      <AddProfileForm />
      {profiles && profiles.map((item) => 
        <div className = 'profileCard'>
          <p>{item.firstName}</p>
          <p>{item.lastName}</p>
          <p>{item.emergencyContact}</p>
        </div>
      )}
      {/* each time profile is added, database will be updated and the updated profiles will render via map function, */}
    </div>
  );
}

export default Home;
