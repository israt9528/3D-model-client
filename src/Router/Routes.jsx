import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AllModels from "../Pages/AllModels";
import PrivateRoute from "./PrivateRoute";
import AddModel from "../Pages/AddModel";
import ModelDetails from "../Pages/ModelDetails";
import UpdateModel from "../Pages/UpdateModel";
import MyModals from "../Pages/MyModals";
import MyDownloads from "../Pages/MyDownloads";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://3-d-models-server.vercel.app/latest-models"),
      },
      {
        path: "/all-models",
        Component: AllModels,
        loader: () => fetch("https://3-d-models-server.vercel.app/models"),
      },
      {
        path: "/add-model",
        element: (
          <PrivateRoute>
            <AddModel></AddModel>
          </PrivateRoute>
        ),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRoute>
            <ModelDetails></ModelDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModals></MyModals>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-downloads",
        element: (
          <PrivateRoute>
            <MyDownloads></MyDownloads>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <UpdateModel></UpdateModel>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://3-d-models-server.vercel.app/models/${params.id}`),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
