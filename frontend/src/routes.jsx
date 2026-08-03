import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

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
        path: "assessment",
        element: <Assessment />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);