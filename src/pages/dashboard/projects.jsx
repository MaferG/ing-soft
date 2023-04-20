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
    CardFooter,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
    Button,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,

} from "@material-tailwind/react";
import {

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
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    BriefcaseIcon,
    ClockIcon
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

export function Projects() {
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
        <Tabs value="test">
            <TabsHeader>
                <Tab key="all" value="all">
                    <div className="flex items-center gap-2">
                        {React.createElement(BriefcaseIcon, { className: "w-5 h-5" })}
                        All
                    </div>
                </Tab>
                <Tab key="groups" value="groups">
                    <div className="flex items-center gap-2">
                        {React.createElement(Square3Stack3DIcon, { className: "w-5 h-5" })}
                        Groups
                    </div>
                </Tab>
            </TabsHeader>
            <TabsBody>
                <Card className="w-full  shadow-lg overflow-hidden xl:col-span-2">
                    <CardHeader floated={false} color="blue-gray">

                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <Typography color="gray">
                            here some
                        </Typography>
                        <div className="mb-3 flex items-center justify-between">
                            <TabPanel key="all" value="all">
                                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">

                                    <StatisticsCard
                                        color='blue'
                                        icon={React.createElement(TableCellsIcon)}
                                        title="something"
                                        value="some value"
                                        key="some"
                                        footer={<p>hello</p>}>

                                    </StatisticsCard>
                                </div>
                            </TabPanel>
                            <TabPanel key="groups" value="groups">
                                panel 2
                            </TabPanel>

                        </div>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            here some more
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3">

                    </CardFooter>
                </Card>
            </TabsBody>
        </Tabs>

    );
}

export default Projects;
