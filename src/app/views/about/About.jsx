import "antd/dist/antd.css";
import "../../../styles/About.css";

const About = () => {
  return (
    <div className='about-container'>
      <div className="team-info-container">
        <h1 className="team-title">About Us!</h1>
        <p className="team-info">
          Hey! We're the Responder Helpers! Our team consists of all 4th year students:
          Beverly Ortiz (Electrical Engineering), Henry Gip (Computer Science and Engineering), 
          Christian Mok (Computer Engineering & Computer Science), and Andrea Villasenor
          (Electrical Engineering). We're all students at UC Irvine, and this is our EECS Senior Design ProjectWe made this project because we wanted to give back to our
          for the 2021-2022 school year. We made this project for responders because we wanted to
          help them stay safe while they're out saving people.
        </p>
      </div>
    </div>
  )
}

export default About;