import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import {
  platformSettingsData,
  conversationsData,
  projectsData,
  reportsData,
  ordersOverviewData,
} from "@/data";
import { StatisticsCard } from "@/widgets/cards";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

export function Profile() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 place-items-center gap-6 xl:grid-cols-2 ">
        <Card className="overflow-hidden xl:col-span-2 ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-5">
                Reportes
              </Typography>
              <div className="mb-12 grid gap-y-20 gap-x-20 md:grid-cols-2 xl:grid-cols-2">
                {reportsData.map(({ icon, title, footer, ...rest }) => (
                  <StatisticsCard
                    key={title}
                    {...rest}
                    title={title}
                    icon={React.createElement(icon, {
                      className: "w-6 h-6 text-white",
                    })}
                    footer={
                      <Typography className="font-normal text-blue-gray-600">
                        <strong className={footer.color}>{footer.value}</strong>
                        &nbsp;{footer.label}
                      </Typography>
                    }
                  />
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
