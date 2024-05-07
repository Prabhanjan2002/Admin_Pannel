import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser(); //this function will be assigned on the auth.jsx file
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};
