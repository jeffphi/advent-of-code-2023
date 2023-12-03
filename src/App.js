import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Notes from "./pages/notes";
import NoPage from "./pages/no-page";
import Day1 from './pages/day-1';

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
    */
    <BrowserRouter>
      <Routes>
        <Route path="advent-of-code-2023/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="day-1" element={<Day1 />} />
          <Route path="notes" element={<Notes />} />
          <Route path="*" element={< NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
