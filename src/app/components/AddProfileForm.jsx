import {Button, Input} from 'antd';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../styles/AddProfileForm.css'

function AddProfileForm() {
  const inputDataStyle = {
    margin: '0 5px'
  }
  
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    emergencyContact: '',
    bloodPressure: 5,
    carbonMonoxide: 5,
    temperature: 90,
    healthConditions: ''
  })

  const handleAddProfile = (e) => {
    console.log("adding new profile:", profile);
    axios.post('http://localhost:3001/profiles/create', profile);
    // add new profile to database
    setProfile((profile) => ({
      firstName: '',
      lastName: '',
      emergencyContact: '',
      bloodPressure: 5,
      carbonMonoxide: 5,
      temperature: 90,
      healthConditions: ''
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
  const handleUpdateHealthCondition = (e) => {
    e.persist();
    setProfile((profile) => ({
      ...profile,
      healthConditions: e.target.value
    }));
  }
  

  return (
    <form className="profileForm">
      <div className='formRow'>
        <Input
        className="dataInput"
        style={inputDataStyle}
        size='medium'
        value={profile.firstName}
        onChange={handleUpdateFirstName}
        defaultValue=''
        addonBefore='first name:'/>
        <Input 
        style={inputDataStyle}
        size='medium'
        value={profile.lastName}
        onChange={handleUpdateLastName}
        defaultValue=''
        addonBefore='last name:'
        />
        <Input 
        style={inputDataStyle}
        size='medium'
        value={profile.emergencyContact}
        onChange={handleUpdateEmergencyContact}
        defaultValue=''
        addonBefore='emergency contact #:'/>
      </div>

      <div className='formRow'>
      <Input 
        style={inputDataStyle}
        size='medium'
        value={profile.healthConditions}
        onChange={handleUpdateHealthCondition}
        defaultValue=''
        addonBefore='health conditions:'/>
      </div>
      <div className='submissionButton'>
        <Button style={{backgroundColor: "#c5d5cb"}} onClick={handleAddProfile}> Add New Profile </Button>
      </div>


    </form>
  )
}

export default AddProfileForm;