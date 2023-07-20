import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";
import AllInstructor from "../Instructors/AllInstructor";
import AllClass from "../Classes/AllClass";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Dashboard/MyClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import Payment from "../Payment/Payment";
import InstructorsClass from "../Instructors/InstructorsClass";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddClass from "../Dashboard/AddClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/instructors",
        element: <AllInstructor />,
      },
      {
        path: "/instructors/instructorsClass",
        element: (
          <PrivateRoute>
            <InstructorsClass />
          </PrivateRoute>
        ),
      },
      {
        path: "/allclass",
        element: <AllClass />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myclass",
        element: <MyClass />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
    ],
  },
]);
