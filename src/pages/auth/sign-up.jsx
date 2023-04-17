import { Link, useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert
} from "@material-tailwind/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios'

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isSignUpButtonDisabled, setIsSignUpButtonDisabled] = useState(true);
  const [isEmailTaken, setIsEmailTaken] = useState(false);

  useEffect(() => {
    setIsSignUpButtonDisabled(!isCheckboxChecked);
  }, [isCheckboxChecked]);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response =
        await axios.post('http://192.168.110.20:3000/register', { email, password, name, lastname });
      console.log(response.data);
      navigate('/home');
      console.log("im here");
      console.log(isEmailTaken)
    } catch (error) {
      if (error.response.data === "Error: Email already exist") {
        setIsEmailTaken(true);
      }
      console.error(error);
    }
  }

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
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            {isEmailTaken && (
              <div className="flex w-full flex-col gap-2">
                <Alert color="red"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                >
                  Email already registered!
                </Alert>
              </div>
            )}
            <Input type="name" label="Name" size="lg" onChange={(event) => setName(event.target.value)} />
            <Input type="lastname" label="Lastname" size="lg" onChange={(event) => setLastname(event.target.value)} />
            <Input type="email" label="Email" size="lg" onChange={(event) => setEmail(event.target.value)} />
            {/* {isEmailTaken && <p>Email is already taken</p>} */}
            <Input type="password" label="Password" size="lg" onChange={(event) => setPassword(event.target.value)} />


            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" onChange={handleCheckboxChange} />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleRegister} disabled={isSignUpButtonDisabled}>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
