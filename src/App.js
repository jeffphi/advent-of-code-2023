import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Notes from "./pages/notes";
import NoPage from "./pages/no-page";
import Day1 from './pages/day-1';
import Day2 from './pages/day-2';
import Day3 from './pages/day-3';
import Day4 from './pages/day-4';
import Day5 from './pages/day-5';

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
          <Route path="day-2" element={<Day2 />} />
          <Route path="day-3" element={<Day3 />} />
          <Route path="day-4" element={<Day4 />} />
          <Route path="day-5" element={<Day5 />} />
          <Route path="notes" element={<Notes />} />
          <Route path="*" element={< NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
