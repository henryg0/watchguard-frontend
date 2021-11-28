import {Button} from 'antd';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function AddProfileForm() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    emergencyContact: '',
  })

  const handleAddProfile = (e) => {
    console.log("added new profile");
    // add new profile to database
    setProfile((profile) => ({
      firstName: '',
      lastName: '',
      emergencyContact: ''
    }))
  }
  
  const handleUpdateFirstName = (e) => {
    e.persist();
    setProfile((profile) => ({
      ...profile,
      firstName: e.target.value
    }));
  }

  const handleUpdateLastName = (e) => {
    e.persist();
    setProfile((profile) => ({
      ...profile,
      lastName: e.target.value
    }));
  }

  const handleUpdateEmergencyContact = (e) => {
    e.persist();
    setProfile((profile) => ({
      ...profile,
      emergencyContact: e.target.value
    }));
  }

  return (
    <form className="profileForm">
      <input 
        id = 'first-name'
        class = 'form-field'
        type = 'text'
        placeholder = 'first name'
        name = 'firstName'
        value = {profile.firstName}
        onChange = {handleUpdateFirstName}
      />
      <input 
        id = 'last-name'
        class = 'form-field'
        type = 'text'
        placeholder = 'last name'
        name = 'lastName'
        value = {profile.lastName}
        onChange = {handleUpdateLastName}
      />
      <input 
        id = 'emergency-contact'
        class = 'form-field'
        type = 'text'
        placeholder = 'emergency contact'
        name = 'emergencyContact'
        value = {profile.emergencyContact}
        onChange = {handleUpdateEmergencyContact}
      />
      <Button type='primary' onClick={handleAddProfile}> Add New Profile </Button>
    </form>
  )
}

export default AddProfileForm;