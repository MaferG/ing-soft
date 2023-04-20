// import React from "react";
import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getTasks } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

// import Firebase from '../../../firebase'
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
  Button,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { array, element } from 'prop-types';

// console.log('tasks: ',tasks_data)
// tasks_data.forEach(doc => {tasks.push(doc)})
// const tasks = []
// getTasks().then(array =>{array.forEach(element=> {tasks.push(element)})} )

export function Home() {
  const [tasks, setTasks] = useState([])
  // const [projectNames, setProjectNames] = useState([])
  const [user, loading, error] = useAuthState(auth);
  const arr = []

  const handleTest = () => {
    // const ta = []
    // tasks.then(array => {ta = array})
    console.log(tasks)
  }

  useEffect(() => {

    const fetchData = async () => {
      const data = await getTasks()
      setTasks(data)
      // data.forEach(element =>{

      // })
      console.log('mydata', data)
    }


    if (loading) {
      // setTasks([])
      return;
    }
    if (user) {
      // const arr = []
      // getTasks().then(array=>{array.forEach(element=>{arr.push(element)})})
      // setTasks(arr)
      fetchData()
      // console.log("im in data fetching")
    }

    const intervalId = setInterval(() => { fetchData() }, 120000)

    return () => {
      clearInterval(intervalId)
    }

  }, [user, loading]);

  if (!user) {
    return <div>Loading...</div>;
  }

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
              {/*<Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
                <strong>30 done</strong> this month
        </Typography>*/}

              <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">

                {tasks.map(({ name, description, projectId, authorId, ...rest }) => (
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
                          <strong className={'blue'}>{"Project: "}</strong>
                          &nbsp;{projectId.projectName}
                        </Typography>
                        <Typography className="font-normal text-blue-gray-600">
                          {/* {console.log(projectId)} */}
                          <strong className={'blue'}>{"Description: "}</strong>
                          &nbsp;{description}
                        </Typography>
                        <Typography className="font-normal text-blue-gray-600">
                          {/* {console.log(projectId)} */}
                          <strong className={'blue'}>{"Author: "}</strong>
                          &nbsp;{authorId.name}
                        </Typography>
                      </div>
                    }
                  />
                ))}


              </div>
            </div>
            
          </CardHeader>
          {/* <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
                </CardBody> */}
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
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === ordersOverviewData.length - 1
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

export default Home;
