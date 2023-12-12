import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/azooz-about-page/",
    element: <AboutUsPage />,
  },
  {
    path: "/azooz-contact-page/",
    element: <ContactPage />,
  },
  {
    path: "/freight-forwading/",
    element: <HomePage />,
  },
  {
    path: "/customs-clearance/",
    element: <HomePage />,
  },
  {
    path: "/fulfilment-and-packaging/",
    element: <HomePage />,
  },
  {
    path: "/storage-temperature-controlled/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
