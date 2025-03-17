import React ,{ lazy , Suspense} from "react";
import App from "../App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";


export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
   
      ],
      errorElement: <Error />,
    },
  ]);

  