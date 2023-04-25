import React, { useState, useEffect, useContext } from "react";
import { SignInTemplate } from "../../components/templates/SignIn";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../configs/firebase";
import { getDocs, collection } from "firebase/firestore";
import { UserContext } from "@/context/UserContext";

export function SignIn() {
  const { user, setUser } = useContext(UserContext);
  
  const nav = useNavigate();

  const handleSignIn = async (event, email, password) => {
    event.preventDefault();
    try {
      const userLoged = await signInWithEmailAndPassword(auth, email, password);

      if (userLoged) {
        setUser(userLoged);

        nav("/dashboard/home");
        console.log("User Logued");
      }
    } catch (error) {}
  };

  return <SignInTemplate handleSignIn={handleSignIn} />;
}

export default SignIn;
