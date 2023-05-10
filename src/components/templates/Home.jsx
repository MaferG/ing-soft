// import React from "react";
import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import {
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import {
 
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  ordersOverviewData,
} from "@/data";

export function HomeTemplate() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-5">
                Projects tasks
              </Typography>
              <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                {tasks.map(
                  ({ name, description, projectId, authorId, ...rest }) => (
                    <StatisticsCard
                      key={projectId.projectName}
                      {...rest}
                      title={name}
                      icon={React.createElement(TableCellsIcon, {
                        className: "w-6 h-6 text-white",
                      })}
                      footer={
                        <div>
                          <Typography className="font-normal text-blue-gray-600">
                            {/* {console.log(projectId)} */}
                            <strong className={"blue"}>{"Project: "}</strong>
                            &nbsp;{projectId.projectName}
                          </Typography>
                          <Typography className="font-normal text-blue-gray-600">
                            {/* {console.log(projectId)} */}
                            <strong className={"blue"}>
                              {"Description: "}
                            </strong>
                            &nbsp;{description}
                          </Typography>
                          <Typography className="font-normal text-blue-gray-600">
                            {/* {console.log(projectId)} */}
                            <strong className={"blue"}>{"Author: "}</strong>
                            &nbsp;{authorId.name}
                          </Typography>
                        </div>
                      }
                    />
                  )
                )}
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Tareas pendientes
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              Últimas actualizaciones
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
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
              )
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default HomeTemplate;
