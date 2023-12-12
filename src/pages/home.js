import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="grid">
        <h1>Jeff's Advent of Code 2023</h1>
        <Link to="/advent-of-code-2023/day-1">Day 1</Link>
        <Link to="/advent-of-code-2023/day-2">Day 2</Link>
        <Link to="/advent-of-code-2023/day-3">Day 3</Link>
      </div>
    );
  };
  
  export default Home;