import React, { useState } from "react";
import { auth, db } from "../../../configs/firebase";
import { arrayRemove, updateDoc, getDoc, doc } from "firebase/firestore";

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

export default function ModalDeleteTask({ id, task, tasks, setTasks }) {
  const [open, setOpen] = React.useState(false);

  const onSubmit = async () => {
    try {
      const projectRef = doc(db, "projects", id);
      await updateDoc(projectRef, {
        tasks: arrayRemove(task),
      });

      const newTasks = tasks.filter(el => el.name != task.name)
      setTasks(newTasks);

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
        color="red"
        size="sm"
        ripple={false}
      >
        <TrashIcon strokeWidth={2.5} className="text-red h-5 w-5" />
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
