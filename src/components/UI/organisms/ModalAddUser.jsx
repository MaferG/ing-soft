import React, { useState } from "react";
import { auth, db } from "../../../configs/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function ModalForm() {
  const usersCollectionRef = collection(db, "users");

  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
  });

  const onChangeValue = (e, name) => {
    setFormData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const onSubmit = async () => {
    try {
      await addDoc(usersCollectionRef, {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        gender: formData.gender,
      });
      setOpen(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Agregar usuario</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Nombre"
              size="lg"
              onChange={(e) => onChangeValue(e, "name")}
            />
            <Input
              label="Apellido"
              size="lg"
              onChange={(e) => onChangeValue(e, "lastname")}
            />
            <Input
              label="Genero"
              size="lg"
              onChange={(e) => onChangeValue(e, "gender")}
            />
            <Input
              label="Email"
              size="lg"
              onChange={(e) => onChangeValue(e, "email")}
            />
            <Input
              label="Contraseña"
              size="lg"
              onChange={(e) => onChangeValue(e, "password")}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={onSubmit} fullWidth>
              Agregar
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}
