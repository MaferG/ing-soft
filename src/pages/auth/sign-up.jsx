import { Link, useNavigate } from "react-router-dom";
import { SignUpTemplate } from "../../components/templates/SingUp";
import React, { useState, useEffect } from "react";

import { auth } from "../../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../configs/firebase";
import { getDocs, collection } from "firebase/firestore";

export function SignUp() {

  const nav = useNavigate();

  console.log("CURRENT USER", auth?.currentUser?.email);

  const handleRegister = async (event, email, password) => {
    event.preventDefault();
    try {
      const userCreated = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCreated) {
        nav("/dashboard/home");
        console.log("User created");
      }
    } catch (error) {}
  };

  return <SignUpTemplate handleRegister={handleRegister} />;
}

export default SignUp;
