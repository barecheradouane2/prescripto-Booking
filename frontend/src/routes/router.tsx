import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Doctors from "../pages/Doctors"

import DashboardHome from "../pages/dashboard/DashboardHome";

import Login from "@/pages/Login";
import DoctorDetail from "@/pages/DoctorDetail";


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
        path: "doctorDetail/:id",
        element: <DoctorDetail />,
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