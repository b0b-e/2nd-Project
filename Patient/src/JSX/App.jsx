import '../Styles/App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Appointments from './Appointments';  
import Home from './Home';  
import Progress from './Progress';  

function App() {
  return (
    <Router>
      <div className='super'>
        <header className="top">
          <div className="profile">
            <img src='..\src\assets\Avatar-No-Background.png' alt="profile" />
          </div>
          <div className="greetings">
            <h1>Hello, John!</h1>
          </div>
        </header>

        <footer className="footer">
          <Link className='footer-buttons' to="/home">Home</Link> {/* Link to Home */}
          <Link className='footer-buttons' to="/appointments">Appointments</Link> {/* Link to Appointments */}
          <Link className='footer-buttons' to="/progress">Progress</Link> {/* Link to Progress */}
        </footer>

        {/* Define Routes to switch between components */}
        <Routes>
          {/* Default route to redirect to Home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />  {/* Route for Home page */}
          <Route path="/appointments" element={<Appointments />} />  {/* Route for Appointments page */}
          <Route path="/progress" element={<Progress />} />  {/* Route for Progress page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
