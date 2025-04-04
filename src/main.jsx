import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import RootLayout from "./pages/RootLayout";
import TVShowDetail from "./pages/TVShowDetail";
import ModelProvider from "@context/ModelProvider";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModelProvider>
      <RouterProvider router={router} />
    </ModelProvider>
  </StrictMode>,
);
