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
  Alert,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

export function SignUpTemplate({ handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isSignUpButtonDisabled, setIsSignUpButtonDisabled] = useState(true);

  useEffect(() => {
    setIsSignUpButtonDisabled(!isCheckboxChecked);
  }, [isCheckboxChecked]);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

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
            <Input
              type="name"
              label="Nombre"
              size="lg"
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              type="lastname"
              label="Apellido"
              size="lg"
              onChange={(event) => setLastname(event.target.value)}
            />
            <Input
              type="gender"
              label="Genero"
              size="lg"
              onChange={(event) => setLastname(event.target.value)}
            />
            <Input
              type="email"
              label="Email"
              size="lg"
              onChange={(event) => setEmail(event.target.value)}
            />
            {/* {isEmailTaken && <p>Email is already taken</p>} */}
            <Input
              type="password"
              label="Contraseña"
              size="lg"
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className="-ml-2.5">
              <Checkbox
                label="I agree the Terms and Conditions"
                onChange={handleCheckboxChange}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={(e) =>
                handleRegister(e, email, password, name, lastname, gender)
              }
              disabled={isSignUpButtonDisabled}
            >
              Registrarse
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              ¿Ya tienes una cuenta?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Iniciar sesión
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUpTemplate;
