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
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function ModalDeleteProject({ id, getProjects }) {
  const [open, setOpen] = React.useState(false);

  const onSubmit = async () => {
    try {
      const userToDelete = doc(db, "projects", id);
      await deleteDoc(userToDelete);
      getProjects();
      setOpen(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <React.Fragment>
      <IconButton
        onClick={handleOpen}
        variant="text"
        color="white"
        size="sm"
        ripple={false}
      >
        <TrashIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
      </IconButton>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            ¿Desea eliminar este proyecto?
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
