import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="grid">
        <h1>Jeff's Advent of Code 2023</h1>
        <div>
          <Link to="/advent-of-code-2023/day-1">Day 1</Link>
        </div>
        <div>
          <Link to="/advent-of-code-2023/day-2">Day 2</Link>
        </div>
        <div>
          <Link to="/advent-of-code-2023/day-3">Day 3</Link>
        </div>
        <div>
          <Link to="/advent-of-code-2023/day-4">Day 4</Link>
        </div>
        <div>
          <Link to="/advent-of-code-2023/day-5">Day 5</Link>
        </div>
        <div>
          <Link to="/advent-of-code-2023/day-6">Day 6</Link>
        </div>
        <div>
          <Link to="/advent-of-code-2023/day-7">Day 7</Link>
        </div>
      </div>
    );
  };
  
  export default Home;