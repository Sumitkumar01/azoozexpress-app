import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import FreightForwadingPage from "./pages/FreightForwadingPage";
import CustomsClearancePage from "./pages/CustomsClearancePage";
import FulfilmentPackagingPage from "./pages/FulfilmentPackagingPage";
import StorageTemperatureControlledPage from "./pages/StorageTemperatureControlledPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/PrivacyPolicyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/azooz-about-page",
    element: <AboutUsPage />,
  },
  {
    path: "/azooz-contact-page",
    element: <ContactPage />,
  },
  {
    path: "/freight-forwading",
    element: <FreightForwadingPage />,
  },
  {
    path: "/customs-clearance",
    element: <CustomsClearancePage />,
  },
  {
    path: "/fulfilment-and-packaging",
    element: <FulfilmentPackagingPage />,
  },
  {
    path: "/storage-temperature-controlled",
    element: <StorageTemperatureControlledPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/terms-of-Service ",
    element: <TermsOfServicePage />,
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
