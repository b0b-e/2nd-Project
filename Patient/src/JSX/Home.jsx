import React from 'react';
import '../Styles/Home.css';
import CircularProgressBar from '../JSX/CircularProgressBar';

function Home() {
  return (
    <div>
      <div className="super-appointments">
        <div className="patient-summary">
          Patient Summary
        </div>
        <div className="info-grid">
<div className='topic'>
        <b>Therapist's Details:</b>
          <div className="info-box">
            <div className="info-tag">
              Attending Therapist:
            </div>
            <div className="info">
              Dr. Sagnik Mukherjee
            </div>
          </div>

          <div className="info-box">
            <div className="info-tag">
              Supervisor:
            </div>
            <div className="info">
              Dr. Mansi Poddar
            </div>
          </div>

          <div className="info-box">
            <div className="info-tag">
              Clinic:
            </div>
            <div className="info">
              Ali Yavar Jung National Institute of Speech and Hearing Disabilities, Mumbai
            </div>
          </div>

</div>
<div className="topic">
          <div className="info-box">
            <div className="info-tag">
              Diagnosis:
            </div>
            <div className="info">
              Apraxia:
              <br></br>
              <p></p>
              Difficulty with skilled movements even when a person has the ability and desire to do them.
              Apraxia is caused by brain disease or damage. The brain is unable to make and deliver correct movement instructions to the body.
            </div>
          </div>
</div>



<div className="topic">
  <b>Session Details</b>:
  <div className="info-box">
            <div className="info-tag">
              Next Appointment:
            </div>
            <div className="info">
              21/09/24
            </div>
          </div>

          <div className="info-box">
            <div className="info-tag">
              Total Sessions Attended:
            </div>
            <div className="info">
              4/5
            </div>
          </div>
</div>


<div className="topic">
<div className="info-box">
            <div className="info-tag" id='ovr'>
              Overall Score:
            </div>
            <div className="info">
              
                <CircularProgressBar value={82} maxValue={100} text="82%" />
  
            </div>
          </div>
</div>


        </div>
      </div>
    </div>
  );
}

export default Home;
