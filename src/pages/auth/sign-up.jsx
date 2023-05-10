import { Link, useNavigate } from "react-router-dom";
import { SignUpTemplate } from "../../components/templates/SingUp";
import React, { useState, useEffect } from "react";

import { auth } from "../../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../configs/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

export function SignUp() {
  const nav = useNavigate();
  const usersCollectionRef = collection(db, "users");

  const handleRegister = async (event, email, password, name, lastname, gender) => {
    event.preventDefault();
    try {
      const userCreated = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(usersCollectionRef, {
        name: name,
        lastname: lastname,
        email: email,
        gender: gender,
      });
      if (userCreated) {
        nav("/dashboard/home");
        console.log("User created");
      }
    } catch (error) {}
  };

  return <SignUpTemplate handleRegister={handleRegister} />;
}

export default SignUp;
