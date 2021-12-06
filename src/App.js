import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import Profile from './common/Profile';

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
        <Link to="/rajesh" className="App-link person-link">Rajesh</Link>
        <Link to="/pradeep" className="App-link person-link">Pradeep</Link>
        <Link to="/jenith" className="App-link person-link">Jenith</Link>
        <Link to="/bala" className="App-link person-link">Bala</Link>

        <Routes>
            <Route path="rajesh" element={<Profile title="Rajesh" content="Content for Rajesh" />}></Route>
            <Route path="pradeep" element={<Profile title="Pradeep" content="Content for Pradeep" />}></Route>
            <Route path="jenith" element={<Profile title="Jenith" content="Content for Jenith" />}></Route>
            <Route path="bala" element={<Profile title="Bala" content="Content for Bala" />}></Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;
