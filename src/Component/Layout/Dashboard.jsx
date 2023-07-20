import { FaOpencart, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAdmin from "../Hooks/useAdmin";
import { useEffect } from "react";
const Dashboard = () => {
  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  useEffect(() => {
    document.title = "CricDemy | Dashboard";
  }, []);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to="/">
              <img className="h-10 w-32" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {isAdmin ? (
                <>
                  <li>
                    <Link to="/dashboard/myclass">Manage Class </Link>
                  </li>{" "}
                  <li>
                    <Link to="/dashboard/addclass">Add Class </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allusers">Manage Users</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/dashboard/myclass">
                      My Classes <FaOpencart></FaOpencart>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Payment History <FaWallet />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}

          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/addclass">Add Class </Link>
              </li>
              <li>
                <Link to="/dashboard/myclass">Manage Class</Link>
              </li>

              <li>
                <Link to="/dashboard/allusers">Manage Users</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/myclass">
                  My Classes <FaOpencart></FaOpencart>
                </Link>
              </li>
              <li>
                <Link>
                  Payment History <FaWallet />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
