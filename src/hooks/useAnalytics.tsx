import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router";

const GA_MEASUREMENT_ID = "G-SYZHXQ9FMY"; // alebo z .env

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie_consent") === "true";
    if (!hasConsent) return;

    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie_consent") === "true";
    if (!hasConsent) return;

    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]);
};