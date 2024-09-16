/*import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const getColor = (percentage) => {
  if (percentage >= 75) return '#4caf50'; 
  if (percentage >= 50) return '#ffeb3b'; 
  if (percentage >= 25) return '#ff9800'; 
  return '#f44336';
};

const CircularProgressBar = ({ value, maxValue, text }) => {
  const percentage = (value / maxValue) * 100;
  const color = getColor(percentage);

  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={percentage}
        text={text}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
          trailColor: '#d6d6d6',
          pathTransitionDuration: 1,
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
*/
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Styles/CircularProgressBar.css'; 
const getColor = (percentage) => {
  if (percentage >= 75) return '#4caf50'; 
  if (percentage >= 50) return '#ffeb3b'; 
  if (percentage >= 25) return '#ff9800'; 
  return '#f44336';
};

const CircularProgressBar = ({ value, maxValue, text }) => {
  const [progress, setProgress] = useState(0);
  const percentage = (value / maxValue) * 100;
  const color = getColor(percentage);

  useEffect(() => {
    let start = 0;
    const end = percentage;
    const duration = 2000; 
    const stepTime = 1000;

    const step = () => {
      const now = Math.min(start + stepTime / duration * 100, end);
      setProgress(now);
      start = now;

      if (start < end) {
        requestAnimationFrame(step);
      }
    };

    step();
  }, [percentage]);

  return (
    <div className="circular-progress-wrapper">
      <div className="circular-progress-bar">
        <CircularProgressbar
          value={progress}
          text={text}
          styles={buildStyles({
            pathColor: color,
            textColor: color,
            trailColor: '#d6d6d6',
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
    </div>
  );
};

export default CircularProgressBar;
