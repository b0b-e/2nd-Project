// Home.jsx
import React from 'react';
import '../Styles/Progress.css'
import BarChart from '../JSX/Chart';
import CircularProgressBar from '../JSX/CircularProgressBar';

function Progress() {
  return (
    <div className='super-progress'>
      <div className="progress-report">
        <h2>Progress Report</h2>
      </div>
      <div className="progress-container">
        <div className="ovr">
          <div className="score-ovr">
            <CircularProgressBar value={82} maxValue={100} text="82%" />
          </div>
          <div className="label">
            Overall <br /> Score
          </div>
        </div>
        <div className="goal">
          <div className="score-goal">
            <CircularProgressBar value={40} maxValue={100} text="40%" />
          </div>
          <div className="label">
            Goals <br /> Completed
          </div>
        </div>
      </div>
      <div className='chart'>
        <BarChart />
      </div>
    </div>
  );
}

export default Progress;
