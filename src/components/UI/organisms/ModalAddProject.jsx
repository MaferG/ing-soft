import React, { useState } from "react";
import { auth, db } from "../../../configs/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
import { format } from "prettier";

export default function ModalAddProject({ getProjects }) {
  const projectCollectionRef = collection(db, "projects");

  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
  });

  const onChangeValue = (e, name) => {
    setFormData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const onSubmit = async () => {
    try {
      await addDoc(projectCollectionRef, {
        name: formData.name,
        description: formData.lastname,
      });

      getProjects();
      setOpen(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <React.Fragment>
      <Button onClick={handleOpen} color="green">
        Agregar proyecto
      </Button>
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
              label="Descripcion"
              size="lg"
              onChange={(e) => onChangeValue(e, "lastname")}
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
