import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import { loader as movieLoader } from "./components/Movie/Movie";
import { loader as moviesLoader } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: moviesLoader,
  },
  {
    path: "/movie/:movieId",
    element: <Movie />,
    loader: movieLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
