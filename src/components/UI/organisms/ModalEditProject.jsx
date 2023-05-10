import React, { useEffect, useState } from "react";
import { auth, db } from "../../../configs/firebase";
import { collection, getDoc, addDoc, doc, updateDoc } from "firebase/firestore";
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
} from "@material-tailwind/react";

export default function ModalEditProject({ id, getProjects }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const update = async () => {
      const projectToUpdate = doc(db, "projects", id);
      const docSnap = await getDoc(projectToUpdate);
      const filterData = docSnap.data();
      setFormData({
        name: filterData.name,
        description: filterData.description,
      });
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
      const projectToUpdate = doc(db, "projects", id);
      await updateDoc(projectToUpdate, {
        name: formData.name,
        description: formData.description,
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
      <IconButton
        onClick={handleOpen}
        variant="text"
        color="white"
        size="sm"
        ripple={false}
      >
        <PencilIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
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
              value={formData.name}
              label="Nombre"
              size="lg"
              onChange={(e) => onChangeValue(e, "name")}
            />
            <Input
              value={formData.description}
              label="Descripcion"
              size="lg"
              onChange={(e) => onChangeValue(e, "lastname")}
            />
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
