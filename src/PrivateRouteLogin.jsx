import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

    if (user) return <Navigate to="/play" replace />;

  return children;
}
