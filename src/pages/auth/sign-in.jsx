import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from "firebase/auth";


// import * as firebase from 'firebase/app';
// import 'firebase/auth'


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";

// const firebaseConfig = {
//   apiKey: "AIzaSyA-hOJroSlqyP_BE7pmk-hJxDuX92S5JEc",
//   authDomain: "demo1-2eb35.firebaseapp.com",
//   databaseURL: "https://demo1-2eb35-default-rtdb.firebaseio.com",
//   projectId: "demo1-2eb35",
//   storageBucket: "demo1-2eb35.appspot.com",
//   messagingSenderId: "872586334690",
//   appId: "1:872586334690:web:39fc0009fc7fc58d21e9bb",
//   measurementId: "G-J81Q24NK3J"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // const db = getFirestore(app);

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  // const handleSignIn = async (event) => {

  //   event.preventDefault()
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(email,password)
  //     // const idToken = await userCredential.user.getIdToken()
  //     // const response = await axios.post('http://192.168.110.20:3000/login', {
  //       // idToken: idToken,
  //     // })
  //     // console.log(response.data)
  //     if(user) navigate('/home')
  //   } catch (error) {
  //     console.error(error)
  //   }

  // }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="email" label="Email" size="lg" onChange={(event) => setEmail(event.target.value)} />
            <Input type="password" label="Password" size="lg" onChange={(event) => setPassword(event.target.value)} />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={() => logInWithEmailAndPassword(email, password)}>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
