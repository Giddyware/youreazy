import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import * as ROUTES from "../constants/routes";

export const RequireAuth = ({ user, children }) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to={ROUTES.LOG_IN} state={{ path: location.pathname }} />;
  }
  return children;
};
