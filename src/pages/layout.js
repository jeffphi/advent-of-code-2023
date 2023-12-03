import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/advent-of-code-2023">Home</Link>
          </li>
          <li>
            <Link to="/advent-of-code-2023/notes">Notes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;