import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

export function Project() {
  const names = ["Por hacer", "En curso", "Terminada"];
  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {names.map((name) => (
          <Card>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-6"
            >
              <Typography variant="h6" color="blue-gray" className="mb-2">
                {name}
              </Typography>
            </CardHeader>
            <CardBody className="pt-0">
              {ordersOverviewData.map(
                ({ icon, color, title, description }, key) => (
                  <Card className="mb-6 overflow-hidden xl:col-span-2">
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
                  </Card>
                )
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Project;
