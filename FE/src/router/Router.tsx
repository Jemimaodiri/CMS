import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../pages/auth/Register";
import Verify from "../pages/auth/Verify";
import Login from "../pages/auth/Login";
import AuthLayout from "../Layout/AuthLayout";
import HomeScreen from "../pages/home/HomeScreen";
import Blogs from "../pages/home/Blogs";
import Category from "../pages/home/Category";
import MostRead from "../pages/home/MostRead";
import Blogs from "../pages/home/Blog/Blogs";
import Quill from "../pages/home/Blog/Quill";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "read",
        element: <MostRead />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/blogs/write",
    element: <Quill />,
  },
]);
