import { Outlet, Link } from "react-router-dom";
import './page.css';

const Layout = () => {
  return (
    <>
      <nav className="nav">
            <Link to="/advent-of-code-2023">Home</Link>
            <span> | </span>
            <Link to="/advent-of-code-2023/notes">Notes</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;