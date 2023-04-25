import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
    navigate("/auth/sign-in");
  }, []);

  return null;
}

export default LogOut;
