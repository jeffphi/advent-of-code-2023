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
import Day6 from './pages/day-6';
import Day7 from './pages/day-7';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="advent-of-code-2023/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="day-1" element={<Day1 />} />
          <Route path="day-2" element={<Day2 />} />
          <Route path="day-3" element={<Day3 />} />
          <Route path="day-4" element={<Day4 />} />
          <Route path="day-5" element={<Day5 />} />
          <Route path="day-6" element={<Day6 />} />
          <Route path="day-7" element={<Day7 />} />
          <Route path="notes" element={<Notes />} />
          <Route path="*" element={< NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
