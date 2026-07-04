import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Doctors from "../pages/doctors"

import DashboardHome from "../pages/dashboard/DashboardHome";
import Appointment from "../pages/Appointment";
import Login from "@/pages/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "doctors/:speciality",
        element: <Doctors />,
      },
      {
        path: "appointment/:id",
        element: <Appointment />,
      },{
        path: "login",
        element: <Login />,
      }
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    
    ],
  },
]);