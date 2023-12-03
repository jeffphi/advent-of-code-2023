import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <h1>Jeff's Advent of Code 2023</h1>
        <Link to="/advent-of-code-2023/day-1">Day 1</Link>
      </div>
    );
  };
  
  export default Home;