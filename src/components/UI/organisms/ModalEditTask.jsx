import React, { useEffect, useState } from "react";
import { auth, db } from "../../../configs/firebase";
import {
  arrayRemove,
  arrayUnion,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { PencilIcon } from "@heroicons/react/24/outline";

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
  Select,
  Option,
} from "@material-tailwind/react";

export default function ModalEditTask({ id, task, tasks, setTasks }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: task.name,
    description: task.description,
    type: task.type,
  });

  const onChangeValue = (e, name) => {
    setFormData((prev) => {
      if (name != "type") return { ...prev, [name]: e.target.value };
      return { ...prev, [name]: e };
    });
  };

  const onSubmit = async () => {
    console.log("Task", task, formData);
    try {
      const projectRef = doc(db, "projects", id);
      await updateDoc(projectRef, {
        tasks: arrayRemove(task),
      });
      await updateDoc(projectRef, {
        tasks: arrayUnion(formData),
      });

      const newTasks = tasks.filter((el) => el.name != task.name);
      setTasks([...newTasks, formData]);

      setOpen(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <React.Fragment>
      <IconButton onClick={handleOpen} variant="text" color="green" size="sm">
        <PencilIcon strokeWidth={2.5} className="text-green h-5 w-5" />
      </IconButton>
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
              value={task.name}
            />
            <Input
              label="Descripcion"
              size="lg"
              onChange={(e) => onChangeValue(e, "description")}
              value={task.description}
            />
            <Select
              label="Tipo"
              size="lg"
              id="type"
              onChange={(e) => onChangeValue(e, "type")}
              value={task.type}
            >
              <Option selected>Seleccione</Option>
              <Option value="todo">Por hacer</Option>
              <Option value="progress">En curso</Option>
              <Option value="done">Terminada</Option>
            </Select>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={onSubmit} fullWidth>
              Editar
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}
