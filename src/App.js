import logo from './logo.svg';
import './App.css';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile from './Bala/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{width: 300 + 'px'}} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/" className="App-link person-link">INDEX</Link>
        <Link to="/bala" className="App-link person-link">BALA</Link>

        <Routes>
            <Route path="bala" element={<Profile />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
