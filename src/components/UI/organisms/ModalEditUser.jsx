import React, { useEffect, useState } from "react";
import { auth, db } from "../../../configs/firebase";
import { collection, getDoc, addDoc, doc, updateDoc } from "firebase/firestore";

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

export default function ModalEditUser({ id }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "yo",
    lastname: "yo",
    gender: "yo",
    email: "yo",
    password: 123456,
  });

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const update = async () => {
      const userToUpdate = doc(db, "users", id);
      const docSnap = await getDoc(userToUpdate);
      const filterData = docSnap.data();
      setFormData({
        name: filterData.name,
        lastname: filterData.lastname,
        gender: filterData.gender,
        email: filterData.email,
        password: 1234567,
      });

      console.log("USERTOUPDATE", docSnap.data());
    };
    update();
  }, []);

  const onChangeValue = (e, name) => {
    setFormData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const onSubmit = async () => {
    try {
      const userToUpdate = doc(db, "users", id);
      await updateDoc(userToUpdate, {
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
      <Button onClick={handleOpen}>Editar</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Input
              value={formData.name}
              label="Nombre"
              size="lg"
              onChange={(e) => onChangeValue(e, "name")}
            />
            <Input
              value={formData.lastname}
              label="Apellido"
              size="lg"
              onChange={(e) => onChangeValue(e, "lastname")}
            />
            <Input
              value={formData.gender}
              label="Genero"
              size="lg"
              onChange={(e) => onChangeValue(e, "gender")}
            />
            <Input
              value={formData.email}
              label="Email"
              size="lg"
              onChange={(e) => onChangeValue(e, "email")}
            />
            <Input
              value={formData.password}
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
