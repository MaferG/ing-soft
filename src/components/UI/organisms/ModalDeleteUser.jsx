import React, { useState } from "react";
import { auth, db } from "../../../configs/firebase";
import { collection, deleteDoc, addDoc, doc } from "firebase/firestore";

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

export default function ModalDeleteUser({ id, getUsers }) {
  console.log("ID", id);
  const usersCollectionRef = collection(db, "users");

  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    try {
      const userToDelete = doc(db, "users", id);
      await deleteDoc(userToDelete);
      getUsers();
      setOpen(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        Eliminar
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            ¿Desea eliminar este usuario?
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              color="orange"
              variant="gradient"
              onClick={onSubmit}
              fullWidth
            >
              Eliminar
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}
