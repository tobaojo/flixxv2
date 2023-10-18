import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import { loader as movieLoader } from "./components/Movie/Movie";
import { loader as moviesLoader } from "./App";
import { loader as showsLoader } from "./components/TV-shows/Shows";
import { loader as showLoader } from "./components/Show/Show";
import { loader as pageLoader } from "./components/Pagination/Pagination";
import ErrorPage from "./components/errorPage/Error";
import Shows from "./components/TV-shows/Shows";
import Show from "./components/Show/Show";
import Pagination from "./components/Pagination/Pagination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: moviesLoader,
  },
  {
    path: "/movie/:movieId",
    element: <Movie />,
    errorElement: <ErrorPage />,
    loader: movieLoader,
  },
  {
    path: "/shows",
    element: <Shows />,
    errorElement: <ErrorPage />,
    loader: showsLoader,
  },
  {
    path: "/show/:showId",
    element: <Show />,
    errorElement: <ErrorPage />,
    loader: showLoader,
  },
  {
    path: "/pages/:page",
    element: <Pagination />,
    loader: pageLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
