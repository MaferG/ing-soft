// import React from "react";
import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/24/solid";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import { ordersOverviewData } from "@/data";
import ModalAddProject from "../UI/organisms/ModalAddProject";

export function ProjectsTemplate({ projects, getProjects, setCurrentProject }) {
  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-4">
          <CardHeader variant="gradient" color="white" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              <ModalAddProject getProjects={getProjects} />
            </Typography>
          </CardHeader>
          <CardBody className="overflow-hidden p-5">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map(({ name, description, id, tasks }) => (
                <StatisticsCard
                  key={name}
                  title={name}
                  getProjects={getProjects}
                  id={id}
                  description={description}
                  tasks={tasks ?? []}
                  setCurrentProject={setCurrentProject}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default ProjectsTemplate;
