import "antd/dist/antd.css";
import "../../../styles/Home.css";

const Home = () => {
  return (
    <div className='home-container'>
      <div className="project-info-container">
        <h1 className="project-title">WatchGuard</h1>
        <p className="project-info">
          Welcome to WatchGuard! Our project is a wearable device 
          that sends crucial information from a firefighter wearing 
          the WatchGuard to this website. With respect to time and resources,
          our project detects heart rate, methane levels, and carbon monoxide levels.
          Pressing on the Profiles tab shows each responder and their respective sensor data.
          This website acts as a way to showcase the information</p>
      </div>
    </div>
  )
}

export default Home;