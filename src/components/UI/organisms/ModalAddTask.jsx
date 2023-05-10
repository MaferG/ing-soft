import React, { useState, useEffect } from "react";
import { auth, db } from "../../../configs/firebase";
import { updateDoc, getDoc, doc, arrayUnion } from "firebase/firestore";
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
  Select,
  Option,
} from "@material-tailwind/react";
import { format } from "prettier";

export default function ModalAddTask({
  getProjectsn,
  name,
  id,
  setTasks,
  tasks,
}) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
  });

  const onChangeValue = (e, name) => {
    setFormData((prev) => {
      if (name != "type") return { ...prev, [name]: e.target.value };
      return { ...prev, [name]: e };
    });
  };

  const onSubmit = async () => {
    try {
      const projectRef = doc(db, "projects", id);
      const docSnap = await getDoc(projectRef);
      const filterData = docSnap.data();
      await updateDoc(projectRef, {
        tasks: arrayUnion(formData),
      });
      setTasks([...tasks, formData]);
      console.log("FILTER", filterData);

      setOpen(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <React.Fragment>
      <Button onClick={handleOpen} color="green">
        {name}
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
              onChange={(e) => onChangeValue(e, "description")}
            />
            <Select
              label="Tipo"
              size="lg"
              id="type"
              onChange={(e) => onChangeValue(e, "type")}
            >
              <Option selected>Seleccione</Option>
              <Option value="todo">Por hacer</Option>
              <Option value="progress">En curso</Option>
              <Option value="done">Terminada</Option>
            </Select>
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
