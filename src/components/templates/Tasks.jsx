import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { ordersOverviewData } from "@/data";
import ModalAddTask from "../UI/organisms/ModalAddTask";
import ModalDeleteTask from "../UI/organisms/ModalDeleteTask";
import ModalEditTask from "../UI/organisms/ModalEditTask";

export function TasksTemplate({ tasks, id, setTasks }) {
  const names = ["Por hacer", "En curso", "Terminada"];

  console.log("tasks", tasks);

  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card>
          <CardHeader variant="gradient" color="white" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              <ModalAddTask
                getProjects={[]}
                name={"Por hacer"}
                id={id}
                setTasks={setTasks}
                tasks={tasks}
              />
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {tasks.map(({ name, type, description }, key) => {
              if (type == "todo")
                return (
                  <Card className="mb-6 overflow-hidden xl:col-span-2">
                    <CardBody className="pt-0">
                      <div key={name} className="flex items-start gap-4 py-3">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium"
                          >
                            {name}
                          </Typography>
                          <Typography
                            as="span"
                            variant="small"
                            className="text-xs font-medium text-blue-gray-500"
                          >
                            {description}
                          </Typography>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Typography
                        variant="small"
                        className="text-white-600 flex items-end font-normal"
                      >
                        <ModalEditTask
                          id={id}
                          task={{ name, type, description }}
                          tasks={tasks}
                          setTasks={setTasks}
                        />
                        <ModalDeleteTask
                          id={id}
                          task={{ name, type, description }}
                          tasks={tasks}
                          setTasks={setTasks}
                        />
                      </Typography>
                    </CardFooter>
                  </Card>
                );
            })}
          </CardBody>
        </Card>
        <Card>
          <CardHeader variant="gradient" color="white" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              <ModalAddTask
                getProjects={[]}
                name={"En progreso"}
                id={id}
                setTasks={setTasks}
                tasks={tasks}
              />
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {tasks.map(({ name, type, description }, key) => {
              if (type == "progress")
                return (
                  <Card className="mb-6 overflow-hidden xl:col-span-2">
                    <CardBody className="pt-0">
                      <div key={name} className="flex items-start gap-4 py-3">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium"
                          >
                            {name}
                          </Typography>
                          <Typography
                            as="span"
                            variant="small"
                            className="text-xs font-medium text-blue-gray-500"
                          >
                            {description}
                          </Typography>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Typography
                        variant="small"
                        className="text-white-600 flex items-end font-normal"
                      >
                        <ModalEditTask
                          id={id}
                          task={{ name, type, description }}
                          tasks={tasks}
                          setTasks={setTasks}
                        />
                        <ModalDeleteTask
                          id={id}
                          task={{ name, type, description }}
                          tasks={tasks}
                          setTasks={setTasks}
                        />
                      </Typography>
                    </CardFooter>
                  </Card>
                );
            })}
          </CardBody>
        </Card>
        <Card>
          <CardHeader variant="gradient" color="white" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              <ModalAddTask
                getProjects={[]}
                name={"Finalizadas"}
                id={id}
                setTasks={setTasks}
                tasks={tasks}
              />
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {tasks.map(({ name, type, description }, key) => {
              if (type == "done")
                return (
                  <Card className="mb-6 overflow-hidden xl:col-span-2">
                    <CardBody className="pt-0">
                      <div key={name} className="flex items-start gap-4 py-3">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium"
                          >
                            {name}
                          </Typography>{" "}
                          <Typography
                            as="span"
                            variant="small"
                            className="text-xs font-medium text-blue-gray-500"
                          >
                            {description}
                          </Typography>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Typography
                        variant="small"
                        className="text-white-600 flex items-end font-normal"
                      >
                        <ModalEditTask
                          id={id}
                          task={{ name, type, description }}
                          tasks={tasks}
                          setTasks={setTasks}
                        />
                        <ModalDeleteTask
                          id={id}
                          task={{ name, type, description }}
                          tasks={tasks}
                          setTasks={setTasks}
                        />
                      </Typography>
                    </CardFooter>
                  </Card>
                );
            })}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TasksTemplate;
