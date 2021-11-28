import {Button} from 'antd';

function AddProfileBtn() {
  return (
    <Button type='primary' onClick={handleAddProfile}> Add New Profile </Button>
  )
}

const handleAddProfile = (e) => {
  console.log("added new profile");
  // add new profile to database
}

export default AddProfileBtn;