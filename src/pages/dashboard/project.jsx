import React, { useContext, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { ordersOverviewData } from "@/data";
import { TasksTemplate } from "../../components/templates/Tasks";
import { UserContext } from "@/context/UserContext";

export function Project() {
  const { project } = useContext(UserContext);
  const [tasks, setTasks] = useState(project?.tasks);

  return (
    <TasksTemplate
      tasks={tasks ?? []}
      id={project?.id ?? ""}
      setTasks={setTasks}
    />
  );
}

export default Project;
